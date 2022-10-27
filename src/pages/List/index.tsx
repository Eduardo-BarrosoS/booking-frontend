import { useContext, useState } from "react";
import { Location, useLocation } from "react-router-dom";
import { Featured } from "../../components/featured/Index";
import { Header } from "../../components/Header/Index";
import { Navbar } from "../../components/Navbar/Index";
import { DateRange, Range } from "react-date-range"
import styles from "./styles.module.css"
import { format } from "date-fns";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { SearchContext } from "../../contexts/SearchContext";
import { SearchItem } from "../../components/SearchItem/Index";

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

    const { searchState, destinationDispatch, optionsDispatch, dateDispatch, openDateDispatch } = useContext(SearchContext)
    // const location: Ilocation = useLocation()
    // console.log(location)
    // const [searchState, setsearchState] = useState({
    //     destination: location.state.destination,
    //     date: location.state.date,
    //     options: location.state.options,
    // })

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
                                placeholder={searchState.destination}
                                onChange={(e) => destinationDispatch(e.target.value)}
                            />
                        </div>
                        <div className={styles.lsItem}>
                            <label htmlFor="" > Check-in Date </label>
                            <span
                                onClick={() => openDateDispatch()}
                            >{format(searchState.date[0].startDate!, 'MM/dd/yyyy')} to {format(searchState.date[0].endDate!, 'MM/dd/yyyy')}</span>
                            {searchState.openDate && <div onClick={() => openDateDispatch()} className={styles.closeDateRange}></div>}
                            {searchState.openDate && <DateRange
                                className={styles.dateRange}
                                onChange={item => dateDispatch(item.selection)}
                                editableDateInputs={true}
                                moveRangeOnFirstSelection={false}
                                ranges={searchState.date}
                                minDate={new Date()}
                            />
                            }
                        </div>
                        <div className={styles.lsItem}>
                            <label htmlFor="">Option</label>
                            <div className={styles.lsOptions}>

                                <div className={styles.lsOptionItem}>
                                    <span> Min Price <small>per night</small></span>
                                    <input type="text" className={styles.lsOptionInput} />
                                </div>
                                <div className={styles.lsOptionItem}>
                                    <span> Max Price <small>per night</small></span>
                                    <input type="text" className={styles.lsOptionInput} />
                                </div>
                                <div className={styles.lsOptionItem}>
                                    <span> Adult </span>
                                    <input
                                        type="number"
                                        className={styles.lsOptionInput}
                                        placeholder={`${searchState.options.adult}`}
                                        min={1}
                                    />
                                </div>
                                <div className={styles.lsOptionItem}>
                                    <span> Children </span>
                                    <input type="number" className={styles.lsOptionInput}
                                        placeholder={`${searchState.options.children}`} min={0} />
                                </div>
                                <div className={styles.lsOptionItem}>
                                    <span> Room </span>
                                    <input type="number" className={styles.lsOptionInput}
                                        placeholder={`${searchState.options.room}`} min={1} />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className={styles.listResult}>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}