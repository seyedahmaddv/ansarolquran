import React from 'react';
import "./QuranActivity.css"; // ایمپورت فایل استایل

export default function QuranActivity() {
    const quranwikiicon = '280px-Quran_of_the_Fourth_or_Fifth_Century_AH';

    return (
        <div className="research-container">
            <div className="column">
                {/* محتوای ستون اول */}
                <img src="../src/assets/magazines-icon-6.png" alt="Magazines Icon" className="vanishOut icon" />
                <p>
                    <div className="icon-container">
                        {/* ایکون با انیمیشن */}
                    </div>
                    دانلود فصلنامه قرآن و علوم اجتماعی
                    <br />(تحقیقات کاربردی در حوزه قرآن و حدیث سابق)
                </p>
                <button onClick={() => window.open("https://ensani.ir/fa/article/journal-number/62806/%D9%82%D8%B1%D8%A2%D9%86-%D9%88-%D8%B9%D9%84%D9%88%D9%85-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-%D8%B3%D8%A7%D9%84-3-%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86-1402%D8%B4%D9%85%D8%A7%D8%B1%D9%87-2-%D9%BE%DB%8C%D8%A7%D9%BE%DB%8C-10-", "_blank")} className="research-button">
                    رفتن به فصلنامه
                </button>
            </div>
            <div className="column">
                {/* محتوای ستون دوم */}
                {/* می‌توانید اینجا محتوای دلخواه خود را قرار دهید  */}
                <img src="../src/assets/magazines-icon-6.png" alt="Magazines Icon" className="vanishOut icon" />
                <p>قرآن کلام خدا و کتاب آسمانی مسلمانان است که به<br /> وسیله جبرئیل به حضرت محمد(ص)، وحی شد.</p>
                <button onClick={() => window.open("https://fa.wikishia.net/view/%D9%82%D8%B1%D8%A2%D9%86", "_blank")} className="research-button">
                    رفتن به ویکی شیعه
                </button>
            </div>
        </div>
    );
}
