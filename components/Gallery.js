import styles from '../styles/Home.module.css'


export default function Gallery() {
    return (
        <div className={styles.gallery}>
            <div>
                <h1>GALLERY</h1>
                <span className={styles.topic}>~ What we make ~</span>
            </div>

            <div className={styles.photos}>
                <img className={styles.gridItemOne} src="/images/cake.jpg" alt="cake"/>
                <img className={styles.gridItemTwo} src="/images/honeybread.jpg" alt="honeybread"/>
                <img className={styles.gridItemThree} src="/images/sampler.jpg" alt="breakfast sampler"/>
                <img className={styles.gridItemFour} src="/images/pie.jpg" alt="pie"/>
                <img className={styles.gridItemFive} src="/images/sundae.jpg" alt="sundae"/>
            </div>
        </div>
    )
}