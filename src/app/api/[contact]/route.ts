import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// This handles POST requests
export async function POST(req: NextRequest) {
  try {
    // Validate Origin or Referer header
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");

    const body = await req.json();
    const { name, email, message } = body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      host: process.env.EMAIL_host, // Replace with your SMTP server
      port: process.env.EMAIL_port,
      secure: false, // Set to true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_user, // Replace with your email
        pass: process.env.EMAIL_password, // Replace with your email password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender info
      to: process.env.EMAIL_to, // Recipient email
      subject: "New Contact Form Submission",
      text: message,
      html: `<p><strong>Name:</strong><br />${name}</p>
             <p><strong>Email:</strong><br /> ${email}</p>
             <p><strong>Message:</strong><br />${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}
