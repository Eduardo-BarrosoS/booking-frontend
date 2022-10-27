import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header/Index"
import { MailList } from "../../components/MailList"
import { Navbar } from "../../components/Navbar/Index"
import styles from "./styles.module.css"

export function Hotel() {

    const [slideNumber, setslideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPE6uHU7QQ-f-Mecg1XrLTEfoderY1Uoj0kAbEbPdFhuWqoLYFFJ-yZNW8vzo6MQhP-Ag&usqp=CAU"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHjZW7lIiV9GRcxKvxxlL6ZYgpXAYjlZdtifFmM-UTA3zYMG4OfzxlT-bnZ_74FhWtCg&usqp=CAU"
        },
        {
            src: "https://www.residence-brehova.com/images/one-bedroom/detail/large/living_3.jpg"
        },
        {
            src: "https://americanbathind.com/wp-content/uploads/2018/08/apartment-bathroom-1024x887.jpg"
        },
        {
            src: "http://www.moveforfree.com/blog/wp-content/uploads/2018/05/swimming-pool.jpg"
        },
        {
            src: "https://q-xx.bstatic.com/xdata/images/hotel/840x460/113558611.jpg?k=0d0ddbfbb59b9396774a1e164b0ad495d4b24b42a5d971b4d7317932a929c539&o="
        },
        {
            src: "https://apartmentgurus.com/wp-content/uploads/2021/05/2021.0525-EverleePool.jpg"
        },
    ]

    function handleOpen(i: number) {
        setslideNumber(i)
        setOpen(true)
    }
    function handleclose(i: number) {
        setslideNumber(i)
        setOpen(true)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className={styles.hotelContainer}>
                { open && <div className={styles.slider}>
                    {/* <FontAwesomeIcon icon={} /> */}
                </div>}
                <div className={styles.hotelWrapper}>
                    <h1 className={styles.hotelTitle} >Grand Hotel</h1>
                    <button className={styles.hotelBookNow}> Reserve or Book Now!</button>
                    <div className={styles.hotelAddress}>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span> Alton St 125 New York</span>
                    </div>
                    <span className={styles.hotelDistance}>
                        Excellent location - 500m from center
                    </span>
                    <span className={styles.hotelPriceHighLight}>
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className={styles.hotelImages}>
                        {
                            photos.map((photo, index) => {
                                return (
                                    <img onClick={() => handleOpen(index)} src={photo.src} alt="" className={styles.hotelImg} />
                                )
                            })
                        }
                    </div>
                    <div className={styles.hotelDetails}>
                        <div className={styles.hotelDetailsText}>
                            <h1 className={styles.hotelTitle}> Stay in the heart of Krakow </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora commodi accusamus
                                quos obcaecati nesciunt at culpa, magni eius velit. Rerum,
                                quibusdam voluptas reiciendis consequuntur eius perferendis sit explicabo aliquam maxime.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                                quae adipisci est quod. Nesciunt earum distinctio, labore ducimus
                                est ea praesentium eius, obcaecati sit, dignissimos tempore ipsa ad dolor ipsum.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                                quae adipisci est quod. Nesciunt earum distinctio, labore ducimus
                                est ea praesentium eius, obcaecati sit, dignissimos tempore ipsa ad dolor ipsum.

                            </p>
                        </div>
                        <div className={styles.hotelDetailsPrice}>
                            <h1> Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this property
                                has an excellent location score of 9.8
                            </span>
                            <h2>
                                <b>$945</b> ( 9 nights )
                            </h2>
                            <button> Reserve or Bool Now! </button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}