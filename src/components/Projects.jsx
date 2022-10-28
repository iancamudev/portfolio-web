import React from "react";
import styles from "../styles/Proyects.module.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={styles.body}>
      <h3 className={styles.header}>Projects</h3>
      <div className={styles.div}>
        <div className={styles.descr}>
          <h3 className={styles.h3}>Gamepedia</h3>
          <p className={styles.p}>
            This is my solo project at the SoyHenry bootcamp, I was given the
            task of create a game card app that has filters, sorts, and the
            chance to create a game and upload it into the database.
          </p>
          <div className={styles.tecnologies}></div>
        </div>
        <a target="_blank" href="https://gamepedia-mu.vercel.app/">
          <div className={styles.card}></div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
