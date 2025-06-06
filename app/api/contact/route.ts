import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Configure your email transporter
    // You'll need to replace these with your actual SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER, // Or a specific 'from' address
      to: 'bazley456@gmail.com', // The email address you want to receive messages
      subject: `New message from ${name} - Portfolio Contact Form`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
} 