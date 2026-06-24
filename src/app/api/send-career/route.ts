import { NextRequest, NextResponse } from 'next/server';
import { sendCareerEmail, CareerEmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('📧 [CAREER] Received form submission');
    const body = await request.json();
    console.log('📧 [CAREER] Raw body:', JSON.stringify(body));
    
    const data: CareerEmailData = {
      name: String(body.name || ''),
      email: String(body.email || ''),
      phone: String(body.phone || ''),
      linkedinUrl: body.linkedinUrl ? String(body.linkedinUrl) : undefined,
      coverLetter: body.coverLetter ? String(body.coverLetter) : undefined,
      resumeUrl: body.resumeUrl ? String(body.resumeUrl) : undefined,
    };
    
    console.log('📧 [CAREER] Parsed data:', data);

    // Validate required fields
    if (!data.name || !data.email || !data.phone) {
      console.error('❌ [CAREER] Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    if (!data.resumeUrl) {
      console.error('❌ [CAREER] Validation failed: Resume URL missing');
      return NextResponse.json(
        { error: 'Resume URL is required' },
        { status: 400 }
      );
    }

    // Send email
    console.log('📧 [CAREER] Sending email via Resend...');
    const result = await sendCareerEmail(data);
    console.log('📧 [CAREER] Resend response:', result);

    if (result.success) {
      console.log('✅ [CAREER] Email sent successfully');
      return NextResponse.json(
        { success: true, message: 'Application sent successfully' },
        { status: 200 }
      );
    } else {
      console.error('❌ [CAREER] Resend error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send application email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [CAREER] API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}