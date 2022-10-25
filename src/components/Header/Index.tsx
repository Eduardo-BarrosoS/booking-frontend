
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { format } from "date-fns";
import { DateRange } from "react-date-range"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

import styles from "./styles.module.css"

interface IHeaderProps {
    type?: string
}

export function Header({ type }: IHeaderProps) {
    
    const navigate = useNavigate()
    const { searchState, openDateDispatch, destinationDispatch, openOptionsDispatch, optionsDispatch, dateDispatch} = useContext(SearchContext)

    function handleOption(name: string, operation: string) {
        optionsDispatch(name, operation)
    }

    function handleSearch () {
        navigate("/hotels", { state: { 
            destination: searchState.destination, 
            date: searchState.date,
            options: searchState.options,
        } } )
    }

    return (
        <div className={styles.header} >
            <div className={ type === "list" ? `${styles.headerContainer} ${styles.listMode}` : styles.headerContainer} >

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
                {type !== "list" &&
                    <>
                        <h1 className={styles.headerTitle}> A lifetime of discounts? It's Genius.</h1>
                        <p className={styles.headerDesc}>
                            Get rewarded for yarn travel -
                            unlock instant saving of 10% or more with a free Lamabooking account
                        </p>
                        <button className={styles.headerBtn}> Sing in/ Register</button>
                        <div className={styles.headerSearch}>
                            <div className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
                                <input 
                                    type="text" 
                                    placeholder="Where are you going?"
                                    className={styles.headerSearchInput}
                                    onChange={(e) => destinationDispatch(e.target.value as string)}
                                     />
                            </div>
                            <div className={styles.headerSearchItem}>

                                <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />
                                <span onClick={() => openDateDispatch() } 
                                className={styles.headerSearchText}> {format(searchState.date[0].startDate!, 'MM/dd/yyyy')} to {format(searchState.date[0].endDate!, 'MM/dd/yyyy')} </span>
                                {searchState.openDate && <div onClick={() => openDateDispatch() } className={styles.closeDateRange}></div>}
                                {searchState.openDate && <DateRange
                                    className={styles.dateRenge}
                                    editableDateInputs={true}
                                    onChange={item => dateDispatch( item.selection )}
                                    moveRangeOnFirstSelection={false}
                                    ranges={searchState.date}
                                    minDate={new Date()}
                                />}

                            </div>
                            <div className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
                                <span
                                    onClick={() => openOptionsDispatch() }
                                    className={styles.headerSearchText}>
                                    {` ${searchState.options.adult} adult ${searchState.options.children} children ${searchState.options.room} room`}
                                </span>
                                {searchState.openOptions && <div onClick={() => openOptionsDispatch()} className={styles.closeDateRange}></div>}
                                {searchState.openOptions && <div className={styles.options}>
                                    <div className={styles.optionsItem} >
                                        <span>Adult</span>
                                        <div className={styles.optionsCounter}>
                                            <button
                                                disabled={searchState.options.adult <= 1}
                                                className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("adult", "d")}
                                            >-</button>
                                            <span>{searchState.options.adult}</span>
                                            <button className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("adult", "i")}
                                            >+</button>
                                        </div>
                                    </div>
                                    <div className={styles.optionsItem} >
                                        <span>Children</span>
                                        <div className={styles.optionsCounter}>
                                            <button
                                                disabled={searchState.options.children <= 0}
                                                className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("children", "d")}
                                            >-</button>
                                            <span>{searchState.options.children}</span>
                                            <button
                                                className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("children", "i")}
                                            >+</button>
                                        </div>
                                    </div>
                                    <div className={styles.optionsItem} >
                                        <span>Room</span>
                                        <div className={styles.optionsCounter}>
                                            <button
                                                disabled={searchState.options.room <= 1}
                                                className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("room", "d")}
                                            >-</button>
                                            <span>{searchState.options.room}</span>
                                            <button className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("room", "i")}
                                            >+</button>
                                        </div>
                                    </div>
                                </div>
                                }

                            </div>
                            <div className={styles.headerSearchItem}>
                                <button className={styles.headerBtn} onClick={ () => handleSearch()}> Search </button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}