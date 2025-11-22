import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // ---------- 1. Validate API key ----------
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key exists:', !!apiKey);
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { error: { message: 'Missing RESEND_API_KEY environment variable' } },
        { status: 500 }
      );
    }

    // ---------- 2. Validate recipient email ----------
    const recipient = process.env.RECIPIENT_EMAIL;
    console.log('Recipient email:', recipient);
    if (!recipient) {
      console.error('RECIPIENT_EMAIL is missing');
      return NextResponse.json(
        { error: { message: 'Missing RECIPIENT_EMAIL environment variable' } },
        { status: 500 }
      );
    }

    // ---------- 3. Create Resend instance ----------
    const resend = new Resend(apiKey);

    // ---------- 4. Parse request body ----------
    const { name, email, subject, message } = await req.json();
    console.log('Received form data:', { name, email, subject });

    // ---------- 5. Send email ----------
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: [recipient],
      subject: `New Message from Portfolio: ${subject}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h1>New Message from Portfolio</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: {
          message: error.message || 'Something went wrong',
          details: error.toString(),
        },
      },
      { status: 500 }
    );
  }
}
