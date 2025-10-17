import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
}

export function EmailTemplate({ 
  firstName, 
  lastName, 
  company, 
  email, 
  phone, 
  message 
}: EmailTemplateProps) {
  return (
    <div dir="rtl" style={{ fontFamily: 'Vazir, Tahoma, sans-serif', background: '#f9fafb', padding: '20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', borderRadius: '8px', padding: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        
        {/* هدر ایمیل */}
        <div style={{ background: '#4f46e5', color: 'white', padding: '20px', borderRadius: '8px 8px 0 0', margin: '-30px -30px 20px -30px' }}>
          <h2 style={{ margin: '0', textAlign: 'center' }}>📧 پیام جدید از فرم تماس</h2>
        </div>
        
        {/* اطلاعات کاربر */}
        <div style={{ marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '5px' }}>
          <div style={{ fontWeight: 'bold', color: '#374151', marginBottom: '5px' }}>👤 نام و نام خانوادگی:</div>
          <div style={{ color: '#6b7280' }}>{firstName} {lastName}</div>
        </div>

        {/* شرکت (اختیاری) */}
        {company && (
          <div style={{ marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '5px' }}>
            <div style={{ fontWeight: 'bold', color: '#374151', marginBottom: '5px' }}>🏢 مؤسسه/سازمان:</div>
            <div style={{ color: '#6b7280' }}>{company}</div>
          </div>
        )}

        {/* ایمیل */}
        <div style={{ marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '5px' }}>
          <div style={{ fontWeight: 'bold', color: '#374151', marginBottom: '5px' }}>📧 ایمیل:</div>
          <div style={{ color: '#6b7280' }}>
            <a href={`mailto:${email}`} style={{ color: '#4f46e5', textDecoration: 'none' }}>
              {email}
            </a>
          </div>
        </div>

        {/* شماره تماس */}
        <div style={{ marginBottom: '15px', padding: '10px', background: '#f8fafc', borderRadius: '5px' }}>
          <div style={{ fontWeight: 'bold', color: '#374151', marginBottom: '5px' }}>📞 شماره تماس:</div>
          <div style={{ color: '#6b7280' }}>
            <a href={`tel:${phone}`} style={{ color: '#4f46e5', textDecoration: 'none' }}>
              {phone}
            </a>
          </div>
        </div>

        {/* پیام کاربر */}
        <div style={{ background: '#f0f9ff', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
          <div style={{ fontWeight: 'bold', color: '#374151', marginBottom: '5px' }}>💬 پیام:</div>
          <div style={{ color: '#6b7280', whiteSpace: 'pre-line', lineHeight: '1.6', marginTop: '10px' }}>
            {message}
          </div>
        </div>

        {/* فوتر */}
        <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#9ca3af', fontSize: '12px' }}>
          این ایمیل به صورت خودکار از فرم تماس وبسایت ارسال شده است.
        </div>
      </div>
    </div>
  );
}