import { useState } from "react";
import { Location, useLocation } from "react-router-dom";
import { Featured } from "../../components/featured/Index";
import { Header } from "../../components/Header/Index";
import { Navbar } from "../../components/Navbar/Index";
import { DateRange, Range } from "react-date-range"
import styles from "./styles.module.css"
import { format } from "date-fns";

interface Ilocation extends Location {
    state: {
        destination: string;
        date: Range[];
        options: {
            adult: number;
            children: number;
            room: number
        }
    }
}

export function List() {

    const location: Ilocation = useLocation()
    const [reserveInformation, setReserveInformation] = useState({
        destination: location.state.destination,
        date: location.state.date,
        options: location.state.options,
    })

    return (
        <div>
            <Navbar />
            <Header type={"list"} />
            <div className={styles.listContainer}>
                <div className={styles.listWrapper}>
                    <div className={styles.listSearch}>
                        <h1 className={styles.lsTitle}>Search</h1>
                        <div className={styles.lsItem}>
                            <label htmlFor="" > Destination </label>
                            <input 
                            type="text"
                             placeholder={reserveInformation.destination}
                             onChange={(e) => {setReserveInformation( { 
                                destination: e.target.value,
                                date: reserveInformation.date ,
                                options: reserveInformation.options
                            } )
                             }}
                             />
                        </div>
                        <div className={styles.lsItem}>
                            <label htmlFor="" > Check-in Date </label>
                            <span>{format(reserveInformation.date[0].startDate!, 'MM/dd/yyyy')} to {format(reserveInformation.date[0].endDate!, 'MM/dd/yyyy')}</span>
                            <DateRange 
                            onChange={item => setReserveInformation( { 
                                destination: reserveInformation.destination,
                                date: [ item.selection ] ,
                                options: reserveInformation.options
                            } )}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={reserveInformation.date}
                            minDate={new Date()}
                            />
                        </div>
                    </div>
                    <div className={styles.listResult}></div>
                </div>
            </div>
        </div>
    )
}