import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").toString().trim();
    const email = (body?.email || "").toString().trim();
    const subject = (body?.subject || "").toString().trim();
    const message = (body?.message || "").toString().trim();

    // --- Basic validation ---
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in every field before sending." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { EMAIL_USER, EMAIL_APP_PASSWORD, CONTACT_RECEIVER } = process.env;

    if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
      console.error("Missing EMAIL_USER or EMAIL_APP_PASSWORD environment variables.");
      return NextResponse.json(
        { error: "The contact form isn't configured yet. Please reach out by email directly." },
        { status: 500 }
      );
    }

    // --- Send email via Gmail SMTP using an App Password ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name} (via website)" <${EMAIL_USER}>`,
      to: CONTACT_RECEIVER || EMAIL_USER,
      replyTo: email,
      subject: `New enquiry: ${subject}`,
      text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #0B1120;">
          <h2 style="color: #2E58D6;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #F6F8FC; padding: 16px; border-radius: 8px;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your message. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
