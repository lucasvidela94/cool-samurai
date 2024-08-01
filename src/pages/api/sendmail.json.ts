import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const adminEmail = import.meta.env.EMAIL;
const adminPassword = import.meta.env.PASS;

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      console.log(params);
      const formData = await request.json();
      const name = formData.name;
      const surname = formData.surname;
      const email = formData.email;
      const tel = formData.tel;
      const message = `${formData.message}
----------------------------------------------------------------------
From: ${name} ${surname} • email: ${email} • tel: ${tel}
      `;

      const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
        /[\r\n]/g,
        "<br>",
      )}</div>`;

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: adminEmail,
          pass: adminPassword,
        },
      });

      let mailDetails = {
        from: email,
        to: adminEmail,
        subject: `Solicitud de contacto:`,
        text: message,
        html,
      };

      let mailResult = await transporter.sendMail(mailDetails);
      console.log("Message sent: %s", mailResult.messageId);

      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        {
          status: 200,
        },
      );
    } catch (error) {
      console.log("******* Error: ", error);
      return new Response(JSON.stringify({ error: "Error sending email" }), {
        status: 500,
      });
    }
  }
  return new Response(JSON.stringify({ error: "Invalid Content-Type" }), {
    status: 400,
  });
};
