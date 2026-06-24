import { Resend } from 'resend';

console.log('🔑 Resend API Key loaded:', process.env.RESEND_API_KEY ? '✅ Present' : '❌ Missing');
const resend = new Resend(process.env.RESEND_API_KEY);

export interface InquiryEmailData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  country?: string;
  mineral?: string;
  inquiryType?: string;
  message: string;
}

export interface CareerEmailData {
  name: string;
  email: string;
  phone: string;
  linkedinUrl?: string;
  coverLetter?: string;
  resumeUrl?: string;
}

export interface JapaneseInquiryEmailData {
  companyName: string;
  contactName: string;
  email: string;
  targetMineral?: string;
  specifications: string;
}

// Send inquiry form email
export async function sendInquiryEmail(data: InquiryEmailData) {
  try {
    console.log('📧 [EMAIL] Calling Resend API for inquiry email to:', 'bhavishya@mineralia.org.in');
    const result = await resend.emails.send({
      from: 'noreply@mineralia.org.in',
      to: 'bhavishya@mineralia.org.in',
      replyTo: data.email,
      subject: `New Supply Inquiry from ${data.name}`,
      html: generateInquiryEmailHtml(data),
    });

    console.log('📧 [EMAIL] Resend API response:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ [EMAIL] Error sending inquiry email:', error);
    return { success: false, error };
  }
}

// Send contact form email
export async function sendContactEmail(data: ContactEmailData) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@mineralia.org.in',
      to: 'bhavishya@mineralia.org.in',
      replyTo: data.email,
      subject: `Technical Inquiry from ${data.name} - ${data.inquiryType || 'General'}`,
      html: generateContactEmailHtml(data),
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error };
  }
}

// Send career application email
export async function sendCareerEmail(data: CareerEmailData) {
  try {
    const result = await resend.emails.send({
      from: 'noreply@mineralia.org.in',
      to: 'bhavishya@mineralia.org.in',
      replyTo: data.email,
      subject: `New Career Application from ${data.name}`,
      html: generateCareerEmailHtml(data),
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending career email:', error);
    return { success: false, error };
  }
}

// Send Japanese market inquiry email
export async function sendJapaneseInquiryEmail(data: JapaneseInquiryEmailData) {
  try {
    console.log('📧 [EMAIL] Calling Resend API for Japanese inquiry email to:', 'bhavishya@mineralia.org.in');
    const result = await resend.emails.send({
      from: 'noreply@mineralia.org.in',
      to: 'bhavishya@mineralia.org.in',
      replyTo: data.email,
      subject: `日本市場への新規問い合わせ - ${data.companyName}`,
      html: generateJapaneseInquiryEmailHtml(data),
    });

    console.log('📧 [EMAIL] Resend API response:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ [EMAIL] Error sending Japanese inquiry email:', error);
    return { success: false, error };
  }
}

// Email template generators
function generateInquiryEmailHtml(data: InquiryEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
        .header { background-color: #1a2847; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: white; padding: 20px; border: 1px solid #e5e7eb; }
        .footer { background-color: #f3f4f6; padding: 20px; border-radius: 0 0 8px 8px; font-size: 12px; color: #6b7280; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a2847; margin-bottom: 5px; }
        .value { color: #555; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Supply Inquiry</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
          </div>
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${escapeHtml(data.company)}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your Mineralia website inquiry form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateContactEmailHtml(data: ContactEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
        .header { background-color: #1a2847; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: white; padding: 20px; border: 1px solid #e5e7eb; }
        .footer { background-color: #f3f4f6; padding: 20px; border-radius: 0 0 8px 8px; font-size: 12px; color: #6b7280; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a2847; margin-bottom: 5px; }
        .value { color: #555; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Technical Inquiry Request</h2>
        </div>
        <div class="content">
          <div class="grid">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
          </div>
          ${data.company ? `<div class="field"><div class="label">Company:</div><div class="value">${escapeHtml(data.company)}</div></div>` : ''}
          ${data.phone ? `<div class="field"><div class="label">Phone:</div><div class="value">${escapeHtml(data.phone)}</div></div>` : ''}
          ${data.country ? `<div class="field"><div class="label">Country:</div><div class="value">${escapeHtml(data.country)}</div></div>` : ''}
          ${data.mineral ? `<div class="field"><div class="label">Primary Mineral Interest:</div><div class="value">${escapeHtml(data.mineral)}</div></div>` : ''}
          ${data.inquiryType ? `<div class="field"><div class="label">Inquiry Type:</div><div class="value">${escapeHtml(data.inquiryType)}</div></div>` : ''}
          <div class="field">
            <div class="label">Message / Technical Requirements:</div>
            <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your Mineralia website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateCareerEmailHtml(data: CareerEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
        .header { background-color: #1a2847; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: white; padding: 20px; border: 1px solid #e5e7eb; }
        .footer { background-color: #f3f4f6; padding: 20px; border-radius: 0 0 8px 8px; font-size: 12px; color: #6b7280; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a2847; margin-bottom: 5px; }
        .value { color: #555; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Career Application</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${escapeHtml(data.phone)}</div>
          </div>
          ${data.linkedinUrl ? `<div class="field"><div class="label">LinkedIn Profile:</div><div class="value"><a href="${escapeHtml(data.linkedinUrl)}">${escapeHtml(data.linkedinUrl)}</a></div></div>` : ''}
          ${data.resumeUrl ? `<div class="field"><div class="label">Resume URL:</div><div class="value"><a href="${escapeHtml(data.resumeUrl)}" target="_blank">View Resume</a></div></div>` : ''}
          ${data.coverLetter ? `<div class="field"><div class="label">Cover Letter:</div><div class="value">${escapeHtml(data.coverLetter).replace(/\n/g, '<br>')}</div></div>` : ''}
        </div>
        <div class="footer">
          <p>This email was sent from your Mineralia careers application form.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateJapaneseInquiryEmailHtml(data: JapaneseInquiryEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
        .header { background-color: #1a2847; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: white; padding: 20px; border: 1px solid #e5e7eb; }
        .footer { background-color: #f3f4f6; padding: 20px; border-radius: 0 0 8px 8px; font-size: 12px; color: #6b7280; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a2847; margin-bottom: 5px; }
        .value { color: #555; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>新規問い合わせ (New Japanese Market Inquiry)</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">会社名 (Company Name):</div>
            <div class="value">${escapeHtml(data.companyName)}</div>
          </div>
          <div class="field">
            <div class="label">担当者名 (Contact Name):</div>
            <div class="value">${escapeHtml(data.contactName)}</div>
          </div>
          <div class="field">
            <div class="label">メールアドレス (Email):</div>
            <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
          </div>
          ${data.targetMineral ? `<div class="field"><div class="label">Target Mineral:</div><div class="value">${escapeHtml(data.targetMineral)}</div></div>` : ''}
          <div class="field">
            <div class="label">仕様要件 (Specification Requirements):</div>
            <div class="value">${escapeHtml(data.specifications).replace(/\n/g, '<br>')}</div>
          </div>
        </div>
        <div class="footer">
          <p>このメールは Mineralia ウェブサイトからの問い合わせフォームを通じて送信されました。</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Server-side HTML escaping (safe for Node.js/Next.js)
function escapeHtml(text: string): string {
  const htmlEscapeMap: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapeMap[char]);
}