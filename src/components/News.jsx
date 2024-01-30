import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css"; // ایمپورت فایل استایل

const News = () => {
  // استفاده از دو state برای مدیریت وضعیت اطلاعات خبرها و وضعیت بارگیری
  const [feedData, setFeedData] = useState(null);
  const [loading, setLoading] = useState(true);

  // استفاده از useEffect برای اجرای کد در هنگام رندر شدن کامپوننت و دریافت اطلاعات
  useEffect(() => {
    // تعریف تابع fetchData که از axios برای درخواست به سرور استفاده می‌کند
    const fetchData = async () => {
      try {
        // ارسال درخواست GET به آدرس مشخص شده
        const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fiqna.ir%2Ffa%2Frss%2F35');
        
        // ذخیره اطلاعات در state و تغییر وضعیت بارگیری به false
        setFeedData(response.data);
        setLoading(false);
      } catch (error) {
        // در صورت بروز خطا، نمایش خطا در کنسول و تغییر وضعیت بارگیری به false
        console.error('Error fetching feed data:', error);
        setLoading(false);
      }
    };

    // فراخوانی تابع fetchData برای درخواست اطلاعات
    fetchData();
  }, []);

  if (loading) {
    return <p>در حال بارگزاری...</p>;
  }

  return (
    <div className="news-container">
      {feedData.items.slice(0, 9).map((item) => ( /* نمایش 9 خبر برای نسخه دسکتاپ */
        <div key={item.guid} className="news-item">
          {/* نمایش تصویر اگر وجود داشته باشد */}
          <img src={item.enclosure.link} alt={item.title} />
          {/* نمایش عنوان خبر */}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer">مطالعه بیشتر</a>
        </div>
      ))}
    </div>
  );
};

export default News;
