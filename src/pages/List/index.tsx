import { Header } from "../../components/Header/Index";
import { Navbar } from "../../components/Navbar/Index";

export function List() {
    return (
        <div>
            <Navbar />
            <Header type={"list"} /> 
        </div>
    )
}