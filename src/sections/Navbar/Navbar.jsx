import { useState } from "react";
import styles from "./NavbarStyles.module.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section id="navbar" className={styles.container}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>Portfolio</h1>
                <button 
                    className={styles.toggler} 
                    onClick={handleToggle}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>
                <ul className={`${styles.navlinks} ${isOpen ? styles.show : ""}`}>
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
            </nav>
        </section>
    );
}

export default Navbar;
