import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/email/contact-email";
import { parseContactBody } from "@/lib/landing/parse-contact-body";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = parseContactBody(body);

    if (!data) {
      return NextResponse.json(
        { error: "Please fill in all required fields correctly." },
        { status: 400 }
      );
    }

    await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Contact form email error:", message, error);

    const isConfig = message.includes("not configured") || message.includes("RESEND");
    const isAuth =
      message.includes("Invalid login") ||
      message.includes("authentication") ||
      message.includes("535") ||
      message.includes("534");

    return NextResponse.json(
      {
        error: isConfig
          ? "Contact email is not set up on the server. Please email us directly."
          : isAuth
            ? "Email service authentication failed. Please email us directly."
            : "We could not send your message. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
