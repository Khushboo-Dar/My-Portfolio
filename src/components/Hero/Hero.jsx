import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Khushboo</h1>
        <p className={styles.description}>Aiming to leverage my expertise in web development and software
          engineering to contribute to innovative and challenging projects,enhancing
          business effectiveness and service quality. Currently learning and deeply interested in web development and design,
          I am passionate about creating optimized, responsive, and visually appealing websites.</p>
        <a href="mailto:khushboodar20@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  );
};
