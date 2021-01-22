import styles from '../styles/Home.module.css'


export default function Menu() {
    return (
        <div id="menu" className={styles.menu}>
            <div id={styles.menuFive}>
                <h1>MENU</h1>
                <span className={styles.topic}>~ Weekly Specials ~</span>
            </div>
            <div id={styles.menuOne}>
                <h2>- Breakfast</h2>
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunrise Sampler</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with your choice of two sides.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Philly Slider Burrito</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with chicken or beef.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunny Side Waffles</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with your choice of two sides.</p>
                </div> 
            </div>
            <div id={styles.menuTwo}>
                <h2>- Dessert</h2>
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunny Side Sundae</h3> 
                        <span>$10</span>
                    </div>
                    <p>Choose up three different flavors.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunny Cheese Cake</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with free ice cream of choice.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunrise Brownie Cake</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with caramel or chocolate drizzle.</p>
                </div>
            </div>
            <div id={styles.menuThree}>
                <h2>- Brunch</h2>
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunny Sliders</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with chicken, beef, or pork.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunny Side Club</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with a pickle on the side.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Chicken and Sun Waffles</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served with one additional side</p>
                </div> 
            </div>
            <div id={styles.menuFour}>
                <h2>- Drinks</h2>
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunrise Coffee</h3> 
                        <span>$10</span>
                    </div>
                    <p>Free refills up to three cups.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunny Lemonade</h3> 
                        <span>$10</span>
                    </div>
                    <p>Choose up to two additional added fruits.</p>
                </div> 
                <div>
                    <div className={styles.menuItem}>
                        <h3>Sunny Mocha</h3> 
                        <span>$10</span>
                    </div>
                    <p>Served hot or cold.</p>
                </div> 
            </div>
        </div>
    )
}