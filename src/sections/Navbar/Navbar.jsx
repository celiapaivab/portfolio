import styles from "./NavbarStyles.module.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {
    return (
        <>
            <section id="navbar" className={styles.container}>
                <nav>
                    <div className={styles.logo}>
                        <h1>Portfolio</h1>
                    </div>
                    <ul className={styles.navlink}>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className={styles.icon}>
                        <FaBars />
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;
