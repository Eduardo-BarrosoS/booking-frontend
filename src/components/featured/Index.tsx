import { useFetch } from "../../hooks/useFetch"
import styles from "./styles.module.css"



export function Featured() {


    const {data, loading, error, reFetch} = useFetch("/hotels/countByCity?cities=berling,london")

    console.log(data)
    return ( 
        <div className={styles.featured}>
            <div className={styles.featuredItem}>
                <img
                className={styles.featuredImg}
                 src="https://www.travelandleisure.com/thmb/sECDb7ILocTUJwCZCBQwkURLmZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/monteverde-cloud-forest-biological-reserve-costa-rica-MOSTBEAUTIFUL0921-12355ee5f2344bbbbe826e68511eb795.jpg" alt="" />
                <div className={styles.featuredTitles}>
                    <h1>Costa Rica</h1>
                    <h2>123</h2>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img
                className={styles.featuredImg}
                 src="https://www.travelandleisure.com/thmb/gfJ5wQf1x6G-rH3iaijT4EogMiw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lake-atitlan-guatemala-MOSTBEAUTIFUL0921-35f105b0ae6543eabb6869c0003c4d1e.jpg" alt="" />
                <div className={styles.featuredTitles}>
                    <h1>Guatemala</h1>
                    <h2>123</h2>
                </div>
            </div>
            <div className={styles.featuredItem}>
                <img
                className={styles.featuredImg}
                 src="https://www.travelandleisure.com/thmb/ZOzJNcKqhwHIYqbo0iBxwGVwgBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/acadia-national-park-maine-MOSTBEAUTIFUL0921-0acc3c3b963f4b85888277cc1269deb2.jpg" alt="" />
                <div className={styles.featuredTitles}>
                    <h1>Maine</h1>
                    <h2>123</h2>
                </div>
            </div>
        </div>
    )
}