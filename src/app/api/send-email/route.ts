import { NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';

const { NODEMAIL_HOST, NODEMAIL_PORT, NODEMAIL_LOGIN, NODEMAIL_PASSWORD, NODEMAIL_SENDER, NODEMAIL_RECEIVER, RECAPTCHA_SECRET_KEY } = process.env;

interface FormData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

function validateInput({ name, email, message }: FormData): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || name.length < 2 || name.length > 50) {
    return 'Invalid name';
  }
  if (!email || !emailRegex.test(email)) {
    return 'Invalid email';
  }
  if (!message || message.length <= 0 || message.length > 1000) {
    return 'Invalid message length (1 - 1000 characters)';
  }
  return null;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await response.json();
  return data.success && data.score >= 0.5;
}

export async function POST(req: Request) {
  const body: FormData = await req.json();
  const { name, email, message, recaptchaToken } = body;

  const validationError = validateInput({ name, email, message });
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (!recaptchaToken) {
    return NextResponse.json({ error: 'reCAPTCHA token missing' }, { status: 400 });
  }

  const isHuman = await verifyRecaptcha(recaptchaToken);
  if (!isHuman) {
    return NextResponse.json({ error: 'Failed reCAPTCHA verification' }, { status: 403 });
  }

  const transporter: Transporter = nodemailer.createTransport({
    host: NODEMAIL_HOST,
    port: Number(NODEMAIL_PORT),
    secure: true,
    auth: {
      user: NODEMAIL_LOGIN,
      pass: NODEMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: NODEMAIL_SENDER,
    replyTo: email,
    to: NODEMAIL_RECEIVER,
    subject: `[HTMLCODING Blog] Form Submission from ${name}`,
    text: message,
    headers: {
      'X-Origin-IP': (req.headers.get('x-forwarded-for') as string) || 'unknown',
      'X-Timestamp': Date.now().toString(),
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
