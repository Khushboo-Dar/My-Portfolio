import React from 'react'
import styles from  "./About.module.css";
import { getImageUrl } from '../../utils';
export const About = () => {
  return (
 <section className={styles.container} id="about"> 
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="about image" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")}alt="cursor icon"></img>
            <div className={styles.aboutItemText}>
                <h3>Front-end Developer</h3>
                <p>
                    I'm a front-end developer with experience in building  optimized sites.
                </p>
            </div>
            </li>
            {/* <li className={styles.aboutItem} ><img src={getImageUrl("about/serverIcon.png")}alt="server icon"></img>
            <div className={styles.aboutItemText}>
                <h3>Back-end Developer</h3>
                <p>
                    I've experience in building fast and optimized Back-end systems and APIs.
                </p>
            </div>
            </li>
            <li className={styles.aboutItem} ><img src={getImageUrl("about/cursorIcon.png")}alt="UI icon"></img>
            <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                   I've designed multiple landing pages and have created design systems as well.
                </p>
            </div>
            </li> */}

        </ul>
    </div>
 </section>
  );
}
