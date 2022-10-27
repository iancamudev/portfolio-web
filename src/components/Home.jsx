import React from "react";
import styles from "../styles/Home.module.css";
import cv from "../assets/Fullstack_Ian_Camu_CV.pdf";

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.div}>
        <h2 className={styles.nombre}>IAN CAMU</h2>
        <h2 className={styles.h2}>PORTFOLIO</h2>
        <p className={styles.p}>
          Fullstack developer, with knowledge in React, Node, PostreSQL and
          more.
        </p>
        <a className={styles.button} href={cv} download="Fullstack_Ian_Camu_CV">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
