import styles from "./ContactStyles.module.css";

function Contact() {
    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTittle">Contact</h1>
            <form action="https://formspree.io/f/xpwwnaql" method="post">
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                    ></input>
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Name
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    ></input>
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Name
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <input
                    className="hover btn"
                    type="submit"
                    value="Submit"
                ></input>
            </form>
        </section>
    );
}

export default Contact;
