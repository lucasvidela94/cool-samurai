import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      const formData = await request.json();
      const { name, surname, email, tel, message } = formData;

      const htmlContent = `
        <div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">
          <p>${message}</p>
          <hr>
          <p>From: ${name} ${surname} • email: ${email} • tel: ${tel}</p>
        </div>
      `;

      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: import.meta.env.EMAIL,
        subject: "Solicitud de contacto",
        html: htmlContent,
      });

      if (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Error sending email" }), {
          status: 500,
        });
      }

      console.log("Email sent successfully:", data);
      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        {
          status: 200,
        },
      );
    } catch (error) {
      console.error("Error processing request:", error);
      return new Response(
        JSON.stringify({ error: "Error processing request" }),
        {
          status: 500,
        },
      );
    }
  }

  return new Response(JSON.stringify({ error: "Invalid Content-Type" }), {
    status: 400,
  });
};
