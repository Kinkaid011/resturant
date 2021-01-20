import styles from '../styles/Home.module.css'
// import Link from 'next/link'

export default function Header() {
    return (
        <>
            {/* <nav>
                <ul>
                    <li><a href="/home"></a>Home</li>
                    <li><a href="#about"></a>About</li>
                    <li><a href="#menu"></a>Menu</li>
                    <li><a href="#resevation"></a>Reservations</li>
                    <li><a href="#gallery"></a>Gallery</li>
                    <li><a href="#contact"></a>Contact</li>
                </ul>
            </nav> */}
            <div className={styles.container}>
                <h1 className={styles.title}>Sunny Side</h1>
                <div className={styles.address}>
                    <span>Third Avenue #24</span>
                    <span>321-165-4987</span>
                </div>
                <div className={styles.hero}>
                    <span>"Come see the brighter side"</span>
                    <img src="/images/sunny-side.png" alt="pancakes on a plate"/>
                    <button>Order Now</button>
                </div>
            </div>
        </>
    )
}