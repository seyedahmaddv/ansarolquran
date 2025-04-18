// lib/date-utils.ts
import moment from 'moment-jalaali';
import 'moment-hijri';
import 'moment/locale/fa'; // اضافه کردن لوکال فارسی برای moment

// فعال کردن تقویم جلالی و تنظیم زبان فارسی
moment.loadPersian({ dialect: 'persian-modern' });

// تعریف میکنیم که moment از نوع any است تا با افزونه‌های moment کار کند
declare module 'moment-jalaali' {
  interface Moment {
    format(format?: string): string;
    iYear(): number;
    iMonth(): number;
    iDate(): number;
    iDayOfYear(): number;
    iWeek(): number;
    iWeekday(): number;
    iDayOfYear(): number;
    startOf(unit: moment.unitOfTime.StartOf): Moment;
    endOf(unit: moment.unitOfTime.StartOf): Moment;
  }
}

// تبدیل تاریخ به شمسی
export function formatJalaliDate(dateString: string): string {
    const text = moment(dateString).format('jYYYY/jMM/jDD');
    return toPersianDigits(text); // تبدیل عدد به فارسی
  
}

// تبدیل تاریخ به قمری
// export function formatHijriDate(dateString: string): string {
//     const hijriDate = moment(dateString).format('iYYYY/iMM/iDD')
//     return toPersianDigits(hijriDate); // تبدیل اعداد به فارسی
// }

export function formatHijriDate(dateString: string): string {
    const m = moment(dateString, 'YYYY-MM-DD').locale('en');
    const hijri = m.clone().format('iYYYY/iMM/iDD');
    return toPersianDigits(hijri);
  }
  

// // فرمت تاریخ شمسی به صورت متنی
// export function formatJalaliDateText(dateString: string): string {
//     const text = moment(dateString).format('dddd jD jMMMM jYYYY');
//     return toPersianDigits(text); // تبدیل عدد به فارسی
//   }

// تعریف تابع تبدیل تاریخ به شمسی با نمایش فارسی
export function formatJalaliDateText(dateString: string): string {
    const m = moment(dateString);
    // تنظیم لوکال به فارسی
    m.locale('fa');
    // استفاده از فرمت دلخواه با نام‌های فارسی
    const text = m.format('dddd jD jMMMM jYYYY');
    return toPersianDigits(text);
  }

// فرمت تاریخ قمری به صورت متنی
export function formatHijriDateText(dateString: string): string {
    const text = moment(dateString).format('iD iMMMM iYYYY').replace(/i/g, '');
    return toPersianDigits(text); // تبدیل عدد به فارسی
  }

// تبدیل اعداد انگلیسی به فارسی
export function toPersianDigits(input: string): string {
    return input.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]);
  }