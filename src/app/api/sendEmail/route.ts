import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Use named export for POST method
export async function POST(req: NextRequest) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Email:", email);
    console.log("Subject:", subject); // Log the subject for debugging

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Adrita Chakraborty" <your-email@example.com>', // sender address
      to: email, // list of receivers
      subject: subject, // Use the subject from the request
      text: message, // plain text body
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
