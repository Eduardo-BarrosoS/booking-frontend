import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faFileCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
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
            src: "https://images.unsplash.com/photo-1628745277895-106fbff3caf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
    function handleMove(direction: string) {
        let newSlideNumber

        if( direction === "l" && slideNumber >= 0 ) newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        else newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        setslideNumber(newSlideNumber)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className={styles.hotelContainer}>
                {open && 
                    <div className={styles.slider}>

                        <FontAwesomeIcon onClick={() => setOpen(false)} className={styles.close} icon={faCircleXmark} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className={styles.arrow} onClick={() => handleMove("l")}/>

                        <div className={styles.sliderWrapper}>
                            <img className={styles.sliderImg}
                                src={photos[slideNumber].src} alt="" />
                        </div>

                        <FontAwesomeIcon icon={faCircleArrowRight} className={styles.arrow} onClick={() => handleMove("r")}/>
                    </div>
                }
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
                                    <div className={styles.hotelImgWrapper}>
                                        <img key={index * 43} onClick={() => handleOpen(index)} src={photo.src} alt="" className={styles.hotelImg} />

                                    </div>
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
                <div className={styles.footerContainer}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}