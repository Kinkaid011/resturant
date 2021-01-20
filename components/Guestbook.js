import styles from '../styles/Home.module.css'


export default function Guestbook() {
    return (
        <div className={styles.guestbook}>
            <div id={styles.bookOne}>
                <h1>GUESTBOOK</h1>
                <span className={styles.topic}>~ What they say ~</span>
            </div>

            <div id={styles.bookTwo} className={styles.review}>
                <h2>“I watch cooking shows all the time and It’s so amazing!”</h2>
                <div className={styles.rating}>
                    <img src="./images/star.svg" alt="star icon"/>
                    <img src="./images/star.svg" alt="star icon"/>
                    <img src="./images/star.svg" alt="star icon"/>
                    <img src="./images/star.svg" alt="star icon"/>
                    <span>- RICKY BOBBY</span>
                </div>
            </div>

            <div id={styles.bookThree} className={styles.review}>
                <h2>“I watch cooking shows all the time and It’s so amazing!”</h2>
                <div className={styles.rating}>
                    <img src="./images/star.svg" alt="star icon"/>
                    <img src="./images/star.svg" alt="star icon"/>
                    <img src="./images/star.svg" alt="star icon"/>
                    <img src="./images/star.svg" alt="star icon"/>
                    <span>- RICKY BOBBY</span>
                </div>
            </div>

            
            <div id={styles.bookFour} className={styles.book}>
                <div className={styles.reserve}>
                    <h3>RESEVERVATIONS</h3>
                </div>
                <h2>Opening Times</h2>
                <div className={styles.time}>
                    <p>Week days</p>
                    <p>9:00am-9:00pm</p>
                </div>
                <div className={styles.time}>
                    <p>Saturday</p>
                    <p>9:00am-9:00pm</p>
                </div>
                <div className={styles.time}>
                    <p>Sunday</p>
                    <p>9:00am-9:00pm</p>
                </div>
                <div className={styles.cta}>
                    <span>+321-165-4987</span>
                    <button>BOOK NOW</button>
                </div>
            </div>
        </div>
    )
}