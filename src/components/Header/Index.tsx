
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import styles from "./styles.module.css"

export function Header() {
    return (
        <div className={styles.header} >
            <div className={styles.headerContainer} >

                <div className={styles.headerList} >
                    <div className={`${styles.headerListItem} ${styles.active}`} >
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className={styles.headerListItem} >
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flites</span>
                    </div>
                    <div className={styles.headerListItem} >
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className={styles.headerListItem} >
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className={styles.headerListItem} >
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>

                </div>
                <h1 className={styles.headerTitle}> A lifetime of discounts? It's Genius.</h1>
                <p className={styles.headerDesc}>
                    Get rewarded for yarn travel -
                    unlock instant saving of 10% or more with a free Lamabooking account
                </p>
                <button className={styles.headerBtn}> Sing in/ Register</button>
                <div className={styles.headerSearch}>
                    <div className={styles.headerSearchItem}>
                        <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
                        <input type="text" placeholder="Where are you going?"
                            className={styles.headerSearchInput} />
                    </div>
                    <div className={styles.headerSearchItem}>
                        <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />
                        <span className={styles.headerSearchText}>date to date</span>
                    </div>
                    <div className={styles.headerSearchItem}>
                        <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
                        <span className={styles.headerSearchText}>
                            2 adult 2 children 1 room
                        </span>
                    </div>
                    <div className={styles.headerSearchItem}>
                        <button className={styles.headerBtn}> Search </button>

                    </div>
                </div>
            </div>
        </div>
    )
}