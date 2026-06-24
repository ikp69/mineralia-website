import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, ContactEmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('📧 [CONTACT] Received form submission');
    const body = await request.json();
    console.log('📧 [CONTACT] Raw body:', JSON.stringify(body));
    
    const data: ContactEmailData = {
      name: String(body.name || ''),
      email: String(body.email || ''),
      company: body.company ? String(body.company) : undefined,
      phone: body.phone ? String(body.phone) : undefined,
      country: body.country ? String(body.country) : undefined,
      mineral: body.mineral ? String(body.mineral) : undefined,
      inquiryType: body.inquiryType ? String(body.inquiryType) : undefined,
      message: String(body.message || ''),
    };
    
    console.log('📧 [CONTACT] Parsed data:', data);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      console.error('❌ [CONTACT] Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Send email
    console.log('📧 [CONTACT] Sending email via Resend...');
    const result = await sendContactEmail(data);
    console.log('📧 [CONTACT] Resend response:', result);

    if (result.success) {
      console.log('✅ [CONTACT] Email sent successfully');
      return NextResponse.json(
        { success: true, message: 'Contact inquiry sent successfully' },
        { status: 200 }
      );
    } else {
      console.error('❌ [CONTACT] Resend error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send contact email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [CONTACT] API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}