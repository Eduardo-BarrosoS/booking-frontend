import { Featured } from "../../components/featured/Index";
import { Header } from "../../components/Header/Index";
import { Navbar } from "../../components/Navbar/Index";
import styles from "./styles.module.css"

export function List() {
    return (
        <div>
            <Navbar />
            <Header type={"list"} /> 
            
        </div>
    )
}