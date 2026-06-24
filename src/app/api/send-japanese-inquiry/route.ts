import { NextRequest, NextResponse } from 'next/server';
import { sendJapaneseInquiryEmail, JapaneseInquiryEmailData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('📧 [JAPANESE] Received form submission');
    const body = await request.json();
    console.log('📧 [JAPANESE] Raw body:', JSON.stringify(body));
    
    const data: JapaneseInquiryEmailData = {
      companyName: String(body.companyName || ''),
      contactName: String(body.contactName || ''),
      email: String(body.email || ''),
      targetMineral: body.targetMineral ? String(body.targetMineral) : undefined,
      specifications: String(body.specifications || ''),
    };
    
    console.log('📧 [JAPANESE] Parsed data:', data);

    // Validate required fields
    if (!data.companyName || !data.contactName || !data.email || !data.specifications) {
      console.error('❌ [JAPANESE] Validation failed: Missing required fields', {
        companyName: !!data.companyName,
        contactName: !!data.contactName,
        email: !!data.email,
        specifications: !!data.specifications,
      });
      return NextResponse.json(
        { error: 'Missing required fields: companyName, contactName, email, specifications' },
        { status: 400 }
      );
    }

    // Send email
    console.log('📧 [JAPANESE] Sending email via Resend...');
    const result = await sendJapaneseInquiryEmail(data);
    console.log('📧 [JAPANESE] Resend response:', result);

    if (result.success) {
      console.log('✅ [JAPANESE] Email sent successfully');
      return NextResponse.json(
        { success: true, message: '問い合わせが正常に送信されました (Inquiry sent successfully)' },
        { status: 200 }
      );
    } else {
      console.error('❌ [JAPANESE] Resend error:', result.error);
      return NextResponse.json(
        { error: 'Failed to send Japanese inquiry email', details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('❌ [JAPANESE] API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}