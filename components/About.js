import styles from '../styles/Home.module.css'


export default function About() {
    return (
        <div className={styles.welcome}>
            <div id={styles.aboutOne} className={styles.heading}>
                <h1>WELCOME</h1>
                <span className={styles.topic}>~ Who we are ~</span>
            </div>
            <div id={styles.aboutTwo}>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui purus bibendum accumsan neque pharetra at urna. Habitant id vitae arcu sit. Tincidunt massa ut pellentesque sit. Sapien euismod risus in aenean fringilla justo, integer.”</p>
                <span>- Chef Lin</span>
            </div>
            <div id={styles.aboutThree} className={styles.award}>
                <span>2018</span>
                <h3>Best of the Best <br /> Charolette</h3>
                <img src="./images/trophy.svg" alt=""/>
            </div>
            <div id={styles.aboutFour} className={styles.award}>
                <span>2019</span>
                <h3>Best of the Best <br /> Charolette</h3>
                <img src="./images/trophy.svg" alt=""/>
            </div>
            <div id={styles.aboutFive} className={styles.award}>
                <span>2020</span>
                <h3>Best of the Best <br /> Charolette</h3>
                <img src="./images/trophy.svg" alt=""/>
            </div>
        </div>
    )
}