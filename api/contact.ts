import nodemailer from 'nodemailer';

export interface ApiRequest {
  method?: string;
  body?: any;
  headers?: Record<string, string | string[] | undefined>;
}

export interface ApiResponse {
  status: (code: number) => ApiResponse;
  json: (data: any) => void;
  send?: (data: any) => void;
  setHeader?: (name: string, value: string) => ApiResponse | void;
}

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  _gotcha?: string;
}

export default async function handler(
  req: ApiRequest,
  res: ApiResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Only POST requests are supported.',
    });
  }

  try {
    const { name, email, subject, message, _gotcha } = (req.body || {}) as ContactPayload;

    // Honeypot spam check
    if (_gotcha && _gotcha.trim().length > 0) {
      return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    }

    // Validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields: name, email, and message.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.',
      });
    }

    // Load SMTP config
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER || 'pacich112@gmail.com';
    const pass = process.env.SMTP_PASS || 'pcwr wrke fzkq czhl';
    const from = process.env.SMTP_FROM || `Paccy Portifolio <${user}>`;
    const to = process.env.ADMIN_NOTIFICATION_EMAIL || 'pacich112@gmail.com';

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const cleanSubject = subject?.trim() || `New Contact Portfolio Message from ${name.trim()}`;
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Kigali',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Plain text fallback
    const textContent = `New Message from Portfolio Contact Form\n\n` +
      `From: ${cleanName} <${cleanEmail}>\n` +
      `Subject: ${cleanSubject}\n` +
      `Date: ${timestamp} (CAT / Kigali)\n\n` +
      `Message:\n${cleanMessage}\n`;

    // Modern HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
          .header { background: linear-gradient(135deg, #0284c7 0%, #6366f1 100%); padding: 32px 28px; color: #ffffff; }
          .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; }
          .header p { margin: 0; font-size: 14px; opacity: 0.9; }
          .content { padding: 28px; }
          .meta-box { background-color: #f1f5f9; border-radius: 12px; padding: 16px; margin-bottom: 24px; font-size: 14px; }
          .meta-row { display: flex; margin-bottom: 8px; }
          .meta-label { font-weight: 600; width: 80px; color: #64748b; }
          .meta-value { color: #0f172a; font-weight: 500; }
          .message-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 10px; }
          .message-body { background-color: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; border-radius: 8px; padding: 18px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; color: #1e293b; }
          .footer { padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
          .reply-btn { display: inline-block; margin-top: 20px; background-color: #0284c7; color: #ffffff !important; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Portfolio Message</h1>
            <p>Direct inquiry received from your portfolio website</p>
          </div>
          <div class="content">
            <div class="meta-box">
              <div class="meta-row">
                <span class="meta-label">From:</span>
                <span class="meta-value"><strong>${cleanName}</strong> &lt;<a href="mailto:${cleanEmail}">${cleanEmail}</a>&gt;</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Subject:</span>
                <span class="meta-value">${cleanSubject}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Date:</span>
                <span class="meta-value">${timestamp}</span>
              </div>
            </div>

            <div class="message-title">Message Content</div>
            <div class="message-body">${cleanMessage.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

            <div style="text-align: center;">
              <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject)}" class="reply-btn">Reply to ${cleanName}</a>
            </div>
          </div>
          <div class="footer">
            TUYIRINGIRE Pacifique Portfolio &bull; Automated notification via SMTP
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from,
      to,
      replyTo: `"${cleanName}" <${cleanEmail}>`,
      subject: `[Portfolio Contact] ${cleanSubject}`,
      text: textContent,
      html: htmlContent,
    });

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });
  } catch (err: any) {
    console.error('Contact API Error:', err);
    return res.status(500).json({
      success: false,
      error: err?.message || 'Failed to send message. Please try again later or reach out directly by email.',
    });
  }
}
