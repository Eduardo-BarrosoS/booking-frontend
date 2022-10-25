import { Featured } from "../../components/featured/Index"
import { FeaturedProperties } from "../../components/FeaturedProperties/Index"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header/Index"
import { MailList } from "../../components/MailList"
import { Navbar } from "../../components/Navbar/Index"
import { PropertyList } from "../../components/PropertyList/Index"
import styles from "./styles.module.css"

export function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className={styles.homeContainer} >
                <Featured />
                <h1 className={styles.homeTitle}>Browser by property type</h1>
                <PropertyList />
                <h1 className={styles.homeTitle}>Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}