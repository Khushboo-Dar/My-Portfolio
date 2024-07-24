import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2 >Contact</h2>
            <p>Feel free to reach out!</p>

        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Emailicon">
                </img><a href="mailto:khushboo_2022bite002@nitsri.ac.in">Mail here!</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinicon">
                </img><a href="https://www.linkedin.com/in/khushboo-dar-0800472b7">linkedin.com/khushboo-dar</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="githubicon">
                </img><a href="https://github.com/Khushboo-Dar">github.com/Khushboo-Dar</a>
            </li>
        </ul>
    </footer>









        ;
}
