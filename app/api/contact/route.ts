// app/api/contact/route.ts
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Dotenv from "dotenv";

Dotenv.config();

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.xstros.xyz",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      logger: true, // enable logger
      debug: true, // enable debug output
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "hello@michalk.nl",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
