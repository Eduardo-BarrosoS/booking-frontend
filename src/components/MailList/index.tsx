
import styles from "./styles.module.css"

export function MailList() {
    return (
        <div className={styles.mail}>
            <h1 className={styles.mailTitle}>Save time, save money</h1>
            <span>Sing up and we'll send the best deals to you</span>
            <div className={styles.mailInputContainer}>
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}