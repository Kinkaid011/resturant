import styles from '../styles/Home.module.css'


export default function Guestbook() {
    return (
        <div className={styles.footer}>
            <div>
                <img className={styles.sun} src="/images/sun.svg" alt=""/>
                <h2 className={styles.sunny}>Sunny Side</h2>
            </div>
            <div>
                <h2>Get news & offers</h2>
                <input type="text" placeholder="Your email"/>
                <button>Subscribe</button>
                <p>We will never send you span</p>
            </div>
            
            <div> 
            <div className={styles.socialIcons}>
                <img src="/images/facebook.svg" alt=""/>
                <img src="/images/instagram.svg" alt=""/>
                <img src="/images/pinterest.svg" alt=""/>
                <img src="/images/twitter-icon.svg" alt=""/>
            </div>
                <h2>Contacts</h2>
                <p>Chattanooga,TN</p>
                <p>Memphis,TN</p>
                <p>+321-165-4987</p>
            </div>

            
        </div>
    )
}