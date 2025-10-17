import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, company, email, phone, message } = await request.json()

    // اعتبارسنجی داده‌ها
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'لطفاً تمام فیلدهای ضروری را پر کنید' },
        { status: 400 }
      )
    }

    // ارسال ایمیل با Resend
    const { data, error } = await resend.emails.send({
      from: 'AnsarolQuran <contact@ansarolquran.ir>',
      to: ['ansarolquran@gmail.com'],
      subject: `پیام جدید از ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="fa">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>پیام جدید از فرم تماس</title>
          <style>
            @font-face {
              font-family: 'Vazir';
              src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir.woff2') format('woff2');
            }
            body {
              font-family: 'Vazir', Tahoma, sans-serif;
              background: #f9fafb;
              padding: 20px;
              margin: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              border-radius: 8px;
              padding: 30px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: #4f46e5;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              margin: -30px -30px 20px -30px;
              text-align: center;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background: #f8fafc;
              border-radius: 5px;
            }
            .label {
              font-weight: bold;
              color: #374151;
              margin-bottom: 5px;
            }
            .value {
              color: #6b7280;
            }
            .message-box {
              background: #f0f9ff;
              padding: 15px;
              border-radius: 5px;
              margin-top: 20px;
            }
            .footer {
              margin-top: 25px;
              padding-top: 15px;
              border-top: 1px solid #e5e7eb;
              text-align: center;
              color: #9ca3af;
              font-size: 12px;
            }
            a {
              color: #4f46e5;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">📧 پیام جدید از فرم تماس</h2>
            </div>
            
            <div class="field">
              <div class="label">👤 نام و نام خانوادگی:</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>

            ${company ? `
            <div class="field">
              <div class="label">🏢 مؤسسه/سازمان:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">📧 ایمیل:</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>

            <div class="field">
              <div class="label">📞 شماره تماس:</div>
              <div class="value">
                <a href="tel:${phone}">${phone}</a>
              </div>
            </div>

            <div class="message-box">
              <div class="label">💬 پیام:</div>
              <div class="value" style="white-space: pre-line; line-height: 1.6; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div class="footer">
              این ایمیل به صورت خودکار از فرم تماس وبسایت ارسال شده است.
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'خطا در ارسال ایمیل. لطفاً دوباره تلاش کنید.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.',
        data 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'خطای سرور. لطفاً بعداً تلاش کنید.' },
      { status: 500 }
    )
  }
}