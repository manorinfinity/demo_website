import React from "react";
import Styles from "../../styles/Article.module.css";
import Header from "../../components/Navbar/Header/Header";
import Footer from "../../components/Navbar/Footer/Footer";
import Calendar from "./svgs/Calendar";
import ThumbsUp from "./svgs/ThumbsUp";
import MessageCircle from "./svgs/MessageCircle";
function Article() {
  return (
    <div className={Styles.article}>
      <Header />
      <div className={Styles.thumbnail}>
        <div className={Styles.heading}>
          <p>
            Decoding Foreign Institutional Investors (FIIs) and Their Importance
            In Indian Stock Markets
          </p>
        </div>
        <div className={Styles.icons}>
          <p>
            <Calendar />
            July 07, 2017
          </p>
          <p>
            <ThumbsUp /> 169
          </p>
          <p>
            <MessageCircle /> 12
          </p>
        </div>
      </div>
      <div className={Styles.readingSection}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1621280336935-ed7cae618aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyNDA2NzYw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            alt="image not found"
          />
        </div>
        <div>hi</div>
      </div>
      <Footer />
    </div>
  );
}

export default Article;
