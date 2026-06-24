import { NextRequest, NextResponse } from 'next/server';
import { sendInquiryEmail, InquiryEmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('📧 [INQUIRY] Received form submission');
    const body = await request.json();
    console.log('📧 [INQUIRY] Raw body:', JSON.stringify(body));
    
    const data: InquiryEmailData = {
      name: String(body.name || ''),
      email: String(body.email || ''),
      company: String(body.company || ''),
      message: String(body.message || ''),
    };
    
    console.log('📧 [INQUIRY] Parsed data:', data);

    // Validate required fields
    if (!data.name || !data.email || !data.company || !data.message) {
      console.error('❌ [INQUIRY] Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: name, email, company, message' },
        { status: 400 }
      );
    }

    // Send email
    console.log('📧 [INQUIRY] Sending email via Resend...');
    const result = await sendInquiryEmail(data);
    console.log('📧 [INQUIRY] Resend response:', result);

    if (result.success) {
      console.log('✅ [INQUIRY] Email sent successfully');
      return NextResponse.json(
        { success: true, message: 'Inquiry sent successfully' },
        { status: 200 }
      );
    } else {
      console.error('❌ [INQUIRY] Resend error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send inquiry email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [INQUIRY] API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}