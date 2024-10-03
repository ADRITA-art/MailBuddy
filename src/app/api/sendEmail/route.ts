import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Use named export for POST method
export async function POST(req: NextRequest) {
  try {
    const { yourEmail, yourAppPassword, email, subject, message } = await req.json();
    console.log("Sender Email:", yourEmail);
    console.log("Subject:", subject); // Log the subject for debugging
    console.log("Recipients email:", email); // Log the subject for debugging


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: yourEmail, // Use the email provided by the user
        pass: yourAppPassword, // Use the app password provided by the user
      },
    });

    await transporter.sendMail({
      from: `"User" <${yourEmail}>`, // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
