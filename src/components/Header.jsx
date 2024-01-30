import React from 'react'
import './Header.css';

export default function Header() {
    return (
        <header className="main-header">
          <div className="header-content">
          <h1>انصارالقرآن</h1>
            <div className="bismillah">بسم الله الرحمن الرحیم</div>
            
            <div className="quran-verse">...فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ...مزمل 24</div>
            <nav className="main-navbar">
              <ul>
                <li>خانه</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
              </ul>
            </nav>
          </div>
          
        </header>
      );
}
