import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.socialLinks}>
        <a href="/">
          <img
            src="https://icons.iconarchive.com/icons/froyoshark/enkel/512/Telegram-icon.png"
            alt="telegramm"
            width="50px"
          />
        </a>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png"
            alt="instagram"
            width="50px"
          />
        </a>
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"
            alt="linkedin"
            width="50px"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
