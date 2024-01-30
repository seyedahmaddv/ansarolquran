import React from "react";
import News from "../components/News.jsx";
import "./Home.css"
const Home = () => {
  return (
    <div>
      <h2 className="h2title">آخرین فعالیت های قرآنی</h2>
      <News />
      {/* سایر بخش‌ها و کامپوننت‌های Home */}
    </div>
  );
};

export default Home;
