import styles from "./styles.module.css"

export function SearchItem() {
    return (
        <div className={styles.searchItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaidjy7JpeYHy_J9WDwI238RyGAiLXkybuez6lGj9qEA29wtKjX5pVcN4uHSixAufbT0&usqp=CAU" 
            className={styles.siImg} />
            <div className={styles.siDesc}>
                <h1 className={styles.siTitle}> Tower Street Apartments </h1>
                <span className={styles.siDistance}> 500ms from center </span>
                <span className={styles.siTaxiOp}>  Free Airport taxi </span>
                <span className={styles.siSubtitle}>  Studio Apartment whit Air conditioning </span>
                <span className={styles.siFeature}>Entire studio • 1 bathroom • 21m² 1 full bed</span>
                <span className={styles.siCancelOp}> Free cancellation </span>
                <span className={styles.siCancelOpSubtitle}> You can cancel later, so lock in this great price today!</span>
            </div>
            <div className={styles.siDetails}>
                <div className={styles.siRating}>
                    <span>excellent</span>
                    <button>8.9</button>
                </div>
                <div className={styles.siDetailsTexts}>
                    <span className={styles.siPrice}> $123 </span>
                    <span className={styles.siTaxOp}> Includes taxes and fees </span>
                    <button className={styles.siCheckButton}> See Availability</button>
                </div>
            </div>
        </div>
    )
}