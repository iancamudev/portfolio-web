import React from "react";
import styles from "../styles/About.module.css";
import stylesDef from "../styles/Defaults.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareTwitter,
  faLinkedin,
  faSquareGithub,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className={styles.body}>
      <h2 className={styles.header}>About me</h2>
      <div className={styles.div}>
        <h2 className={styles.h2}>SKILLS</h2>
        <p className={styles.p}>
          Javascript, CSS & HTML, React, Redux, NodeJs, Express, PostreSQL and
          Sequelize.
        </p>
      </div>
      <div className={styles.div2}>
        <h2 className={styles.h2}>ME</h2>
        <p className={styles.p}>
          I am from Argentina, mi native language is Spanish and i have
          intermediate English (b2), I was started to learn web development on
          SoyHenry's bootcamp, and i'm still learning getting better step by
          step.
        </p>
      </div>
      <div className={styles.contact}>
        <a href="https://twitter.com/deviancamu" target="_blank">
          <FontAwesomeIcon icon={faSquareTwitter} className={styles.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/ian-camu-898830181/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/iancamudev" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} className={styles.icon} />
        </a>
        <a href="mailto: iancamu@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faSquareEnvelope} className={styles.icon} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCe4ol6fyxOjQQ78J4EXt8ZA"
          target="_blank"
        >
          <FontAwesomeIcon icon={faSquareYoutube} className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default About;
