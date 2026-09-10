function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    console.log("CONTACT API: request received");

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    console.log("ENV CHECK:", {
      hasApiKey: Boolean(apiKey),
      hasContactEmail: Boolean(contactEmail),
    });

    if (!apiKey) {
      return Response.json(
        {
          error: "RESEND_API_KEY is missing from .env.local",
        },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      return Response.json(
        {
          error: "CONTACT_EMAIL is missing from .env.local",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      name,
      email,
      phone,
      website,
      service,
      message,
    } = body;

    if (!name || !email || !service || !message) {
      return Response.json(
        {
          error: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    console.log("CONTACT API: contacting Resend...");

    const resendResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: [contactEmail],
          reply_to: String(email),
          subject: `New portfolio inquiry — ${service}`,
          html: `
            <div
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #222;
              "
            >
              <h2>New Portfolio Inquiry</h2>

              <p>
                <strong>Name:</strong>
                ${escapeHtml(String(name))}
              </p>

              <p>
                <strong>Email:</strong>
                ${escapeHtml(String(email))}
              </p>

              <p>
                <strong>Phone:</strong>
                ${escapeHtml(String(phone || "Not provided"))}
              </p>

              <p>
                <strong>Website:</strong>
                ${escapeHtml(String(website || "Not provided"))}
              </p>

              <p>
                <strong>Service:</strong>
                ${escapeHtml(String(service))}
              </p>

              <hr />

              <h3>Message</h3>

              <p>
                ${escapeHtml(String(message)).replace(
                  /\n/g,
                  "<br />"
                )}
              </p>
            </div>
          `,
        }),
      }
    );

    const responseText = await resendResponse.text();

    console.log(
      "RESEND STATUS:",
      resendResponse.status
    );

    console.log(
      "RESEND RESPONSE:",
      responseText
    );

    if (!resendResponse.ok) {
      let errorMessage = "Resend failed to send the email.";

      try {
        const errorData = JSON.parse(responseText);

        if (errorData?.message) {
          errorMessage = errorData.message;
        }
      } catch {
        if (responseText) {
          errorMessage = responseText;
        }
      }

      return Response.json(
        {
          error: errorMessage,
        },
        { status: 500 }
      );
    }

    let responseData = {};

    try {
      responseData = JSON.parse(responseText);
    } catch {
      // Resend returned a non-JSON success response.
    }

    console.log(
      "CONTACT API: email sent successfully"
    );

    return Response.json({
      success: true,
      message: "Email sent successfully.",
      data: responseData,
    });
  } catch (error) {
    console.error(
      "CONTACT API CRASH:",
      error instanceof Error
        ? error.message
        : error
    );

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to connect to the email service.",
      },
      { status: 500 }
    );
  }
}