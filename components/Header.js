import styles from '../styles/Home.module.css'
// import Link from 'next/link'

export default function Header() {

   

    return (
        <>
            <nav id={styles.navbar}>
                <img src="/images/sun.svg" alt="sun"/>
                <ul className={styles.toggle}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#resevation">Reservations</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <img className={styles.switch} src="/images/menu.svg" alt="menu icon"/>
            </nav>
            <div className={styles.container}>
                <div className={styles.caption}>
                    <div>
                        <h1 className={styles.title}>Sunny Side</h1>
                        <div className={styles.address}>
                            <span>Third Avenue #24</span>
                            <span>321-165-4987</span>
                        </div>
                        <div className={styles.hero}>
                            <span>We'll show you the brigher side of breakfast! At Sunny Side everyone is family.</span>
                            <img className={styles.smallHero} src="/images/sunny-side.png" alt="pancakes on a plate"/>
                            <button>Order Now</button>
                        </div>
                    </div>
                    
                    
                    <img className={styles.bigHero} src="/images/sunny-side.png" alt="pancakes on a plate"/>
                </div>
            </div>
        </>
    )
}