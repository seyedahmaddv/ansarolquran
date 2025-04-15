import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">تماس با ما</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            برای ارتباط با مرکز انصارالقرآن، می‌توانید از طریق فرم زیر یا اطلاعات تماس با ما در ارتباط باشید.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">اطلاعات تماس</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<span className="text-gray-700 dark:text-gray-300">
  تهران، خیابان آزادی، کوچه قرآن، پلاک ۴۲، مرکز انصارالقرآن
</span>
</li>
<li className="flex items-start">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
<span className="text-gray-700 dark:text-gray-300">info@ansaralquran.org</span>
</li>
<li className="flex items-start">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
<span className="text-gray-700 dark:text-gray-300">۰۲۱-۸۸۷۷۶۶۵۵</span>
</li>
</ul>
</div>

<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
<h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">ساعات کار</h3>
<ul className="space-y-2">
<li className="text-gray-700 dark:text-gray-300">شنبه تا چهارشنبه: ۸ صبح تا ۴ بعدازظهر</li>
<li className="text-gray-700 dark:text-gray-300">پنجشنبه: ۸ صبح تا ۱۲ ظهر</li>
<li className="text-gray-700 dark:text-gray-300">جمعه: تعطیل</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 bg-gray-100 dark:bg-gray-900">
<div className="container mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">موقعیت ما روی نقشه</h2>
<div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-96">
  {/* در اینجا می‌توانید از کامپوننت نقشه استفاده کنید یا یک تصویر قرار دهید */}
  <div className="bg-gray-200 dark:bg-gray-700 w-full h-full flex items-center justify-center">
    <p className="text-gray-600 dark:text-gray-400">نقشه موقعیت مرکز انصارالقرآن</p>
    {/* برای استفاده از نقشه واقعی، می‌توانید از کتابخانه‌هایی مانند react-leaflet یا google-map-react استفاده کنید */}
  </div>
</div>
</div>
</section>

<section className="py-8">
<div className="container mx-auto px-4">
<h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">سوالات متداول</h2>
<div className="space-y-4 max-w-3xl mx-auto">
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">ساعات برگزاری کلاس‌های قرآن چگونه است؟</h3>
    <p className="text-gray-700 dark:text-gray-300">کلاس‌های قرآن ما معمولاً در بازه زمانی ۹ صبح تا ۲ بعدازظهر برگزار می‌شود. برای اطلاع دقیق از برنامه کلاس‌ها، لطفاً با دفتر مرکز تماس بگیرید.</p>
  </div>
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">آیا امکان ثبت‌نام آنلاین وجود دارد؟</h3>
    <p className="text-gray-700 dark:text-gray-300">بله، شما می‌توانید از طریق بخش "ثبت‌نام" در وب‌سایت ما به صورت آنلاین در کلاس‌های مورد نظر خود ثبت‌نام کنید.</p>
  </div>
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">هزینه شرکت در کلاس‌ها چقدر است؟</h3>
    <p className="text-gray-700 dark:text-gray-300">هزینه‌ها بسته به نوع و سطح کلاس متفاوت است. برای اطلاع از شهریه دوره‌ها، لطفاً با مرکز تماس بگیرید یا به بخش "دوره‌ها" در وب‌سایت مراجعه کنید.</p>
  </div>
</div>
</div>
</section>
</div>
);
}