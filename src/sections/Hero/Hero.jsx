import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/CeliaBrunoResume.pdf'


function Hero() {
    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt='Profile picture of Celia Bruno'></img>
                <img className={styles.colorMode} src={themeIcon} alt='Color mode icon'></img>
            </div>
            <div className={styles.info}>
                <h1>Celia<br />Bruno</h1>
                <h2>Frontend developer</h2>
                <span>
                    <a href='https://github.com/celiapaivab' target="_blank">
                    <img src={githubIcon} alt='Github icon'></img>
                    </a>
                </span>
                <span>
                    <a href='https://www.linkedin.com/in/celia-paiva/' target="_blank">
                    <img src={linkedinIcon} alt='Linkedin icon'></img>
                    </a>
                </span>
                <p>With a passion for developing modern React web apps for commercial businesses.</p>
                <a href={CV} download>
                    <button className='hover' >Resume</button>
                </a>
            </div>
        </section>
    );

}

export default Hero;
