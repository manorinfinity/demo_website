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
        <div className={Styles.content}>
          <img
            className={Styles.euroImage}
            src="https://images.unsplash.com/photo-1621280336935-ed7cae618aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyNDA2NzYw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            alt="image not found"
          />
          <div className={Styles.paras}>
            <p>
              Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Donec id elit non mi porta gravida at eget metus.
              Curabitur blandit tempus porttitor. Donec ullamcorper nulla non
              metus auctor fringilla.
            </p>
            <p>
              Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Vestibulum id ligula porta felis
              euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros.
            </p>
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui.
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Vestibulum id ligula porta felis euismod semper. Donec
              ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className={Styles.paraWithPhoto}>
            <img
              className={Styles.euroImageSmall}
              src="https://images.unsplash.com/photo-1579170053380-58064b2dee67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            />
            <div className={Styles.smallPara}>
              <p>
                Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula
                ut id elit. Donec id elit non mi porta gravida at eget metus.
                Curabitur blandit tempus porttitor. Donec ullamcorper nulla non
                metus auctor fringilla.
              </p>
              <p>
                Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Vestibulum id ligula porta
                felis euismod semper. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </p>
              <p>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Donec
                sed odio dui. Integer posuere erat a ante venenatis dapibus
                posuere velit aliquet. Vestibulum id ligula porta felis euismod
                semper. Donec ullamcorper nulla non metus auctor fringilla.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>
          <div className={Styles.lastName}>
            Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id
            elit. Donec id elit non mi porta gravida at eget metus. Curabitur
            blandit tempus porttitor. Donec ullamcorper nulla non metus auctor
            fringilla. Curabitur blandit tempus porttitor. Donec ullamcorper
            nulla non metus auctor fringilla.
          </div>
          <div className={Styles.bluePara}>
            <p>
              Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut
              id elit. Donec id elit non mi porta gravida fringilla.
            </p>
            <p>creativewithjoy</p>
          </div>
        </div>
        <div className={Styles.sideBar}>
          <p>Categories</p>
          <ul>
            <li>
              <a href="/">Basic finance</a>
              <span>(42)</span>
            </li>
            <li>
              <a href="/">Planning</a>
              <span>(42)</span>
            </li>
            <li>
              <a href="/">Market</a>
              <span>(42)</span>
            </li>
            <li>
              <a href="/">Basic finance</a>
              <span>(42)</span>
            </li>
            <li>
              <a href="/">Planning</a>
              <span>(42)</span>
            </li>
            <li>
              <a href="/">Market</a>
              <span>(42)</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Article;
