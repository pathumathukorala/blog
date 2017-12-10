import React from "react";

import aboutIcon from "../assets/images/about.png";
import {
  about__icon,
  about__heading,
  about__container,
  about__text_placeholder,
  about__excerpt
} from "../assets/styles/modules/about.module.styl";

export default () => (
  <div>
    <div className={about__container}>
      <img src={aboutIcon} className={about__icon} alt="" />
      <div className={about__text_placeholder}>
        <h1 className={about__heading}>Pathum Athukorala</h1>
        <p className={about__excerpt}>
          Programmer, JavaScript &amp; PWA Enthusiast and Pro-Photographer
        </p>
      </div>
    </div>

    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>
);
