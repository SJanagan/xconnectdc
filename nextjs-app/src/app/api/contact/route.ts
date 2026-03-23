import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, source } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Length validation
    if (name.length > 200 || email.length > 320 || message.length > MAX_LENGTH) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 });
    }

    // Sanitize inputs
    const sanitized = {
      name: name.trim().slice(0, 200),
      email: email.trim().toLowerCase().slice(0, 320),
      phone: phone ? String(phone).trim().slice(0, 20) : '',
      company: company ? String(company).trim().slice(0, 200) : '',
      service: service ? String(service).trim().slice(0, 100) : '',
      message: message.trim().slice(0, MAX_LENGTH),
      source: source ? String(source).trim().slice(0, 50) : 'website',
      timestamp: new Date().toISOString(),
    };

    // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
    // For now, log the submission
    console.log('[Contact Form Submission]', JSON.stringify(sanitized));

    return NextResponse.json({ success: true, message: 'Message received. We will get back to you soon.' });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
