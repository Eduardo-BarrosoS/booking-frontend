
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange, DateRangeProps, Range } from "react-date-range"
import { useReducer, useState } from "react";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import styles from "./styles.module.css"
import { format } from "date-fns";

interface IHeaderReducer {
    openDate: boolean;
    date: Range[];
    openOptions: boolean;
    options: {
        adult: number;
        children: number;
        room: number
    }
}

export function Header() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const initialValuesReducer = {
        openDate: false,
        date: [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }
        ],
        openOptions: false,
        options: {
            adult: 1,
            children: 3,
            room: 1
        }
    }

    const [state, dispatch] = useReducer((state: IHeaderReducer, action: any) => {
        switch (action.type) {
            case 'OPEN_DATE':{
                if (action.payload.openDate === false) return state.openDate = true
                return  state.openDate = action.payload.openDate ;
            }
            case 'DATE':{
                return state;
            }
            case 'OPEN_OPTIONS':{
                return state;
            }
            case 'OPTIONS':{
                return state;
            }
            default:
                throw new Error();
        }
        return state
    }, initialValuesReducer);

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
                        <span onClick={() => {
                            dispatch({
                                type: "OPEN_DATE",
                                payload: {
                                    openDate: !state.openDate
                                }
                            })
                        }} className={styles.headerSearchText}> {format(date[0].startDate!, 'MM/dd/yyyy')} to {format(date[0].endDate!, 'MM/dd/yyyy')} </span>
                        {openDate && <div onClick={() => setOpenDate(!openDate)} className={styles.closeDateRange}></div>}
                        {openDate && <DateRange
                            className={styles.date}
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                        />}
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