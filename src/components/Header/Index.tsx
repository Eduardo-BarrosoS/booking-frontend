
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange, DateRangeProps, Range } from "react-date-range"
import { useReducer, useState } from "react";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import styles from "./styles.module.css"
import { format } from "date-fns";
import { Navigate, useNavigate } from "react-router-dom";
import { dateAction, destinationAction, openDateAction, openOptionsAction, optionsAction } from "../../reducers/reserve/action";
import { SearchReducer } from "../../reducers/reserve/reducer";

export interface IHeaderReducer {
    destination: string;
    openDate: boolean;
    date: Range[];
    openOptions: boolean;
    options: {
        adult: number;
        children: number;
        room: number
    }
}

interface IHeaderProps {
    type?: string
}

export function Header({ type }: IHeaderProps) {
    const initialValuesReducer = {
        destination: '',
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
            children: 0,
            room: 1
        }
    }

    const [state, dispatch] = useReducer( SearchReducer, initialValuesReducer);

    const navigate = useNavigate()

    function handleOption(name: string, operation: string) {
        dispatch( optionsAction(name, operation) )
    }

    function handleSearch () {
        navigate("/hotels", { state: { 
            destination: state.destination, 
            date: state.date,
            options: state.options,
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
                                    onChange={(e) => {
                                        dispatch( destinationAction(e.target.value as string) )
                                    }}
                                     />
                            </div>
                            <div className={styles.headerSearchItem}>

                                <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />
                                <span onClick={() => dispatch( openDateAction()) } 
                                className={styles.headerSearchText}> {format(state.date[0].startDate!, 'MM/dd/yyyy')} to {format(state.date[0].endDate!, 'MM/dd/yyyy')} </span>
                                {state.openDate && <div onClick={() => dispatch( openDateAction())} className={styles.closeDateRange}></div>}
                                {state.openDate && <DateRange
                                    className={styles.date}
                                    editableDateInputs={true}
                                    onChange={item => { dispatch( dateAction( item.selection ) ) }}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state.date}
                                    minDate={new Date()}
                                />}

                            </div>
                            <div className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
                                <span
                                    onClick={() => dispatch( openOptionsAction() )}
                                    className={styles.headerSearchText}>
                                    {` ${state.options.adult} adult ${state.options.children} children ${state.options.room} room`}
                                </span>
                                {state.openOptions && <div onClick={() => dispatch( openOptionsAction() )} className={styles.closeDateRange}></div>}
                                {state.openOptions && <div className={styles.options}>
                                    <div className={styles.optionsItem} >
                                        <span>Adult</span>
                                        <div className={styles.optionsCounter}>
                                            <button
                                                disabled={state.options.adult <= 1}
                                                className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("adult", "d")}
                                            >-</button>
                                            <span>{state.options.adult}</span>
                                            <button className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("adult", "i")}
                                            >+</button>
                                        </div>
                                    </div>
                                    <div className={styles.optionsItem} >
                                        <span>Children</span>
                                        <div className={styles.optionsCounter}>
                                            <button
                                                disabled={state.options.children <= 0}
                                                className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("children", "d")}
                                            >-</button>
                                            <span>{state.options.children}</span>
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
                                                disabled={state.options.room <= 1}
                                                className={styles.optionsCounterBtn}
                                                onClick={() => handleOption("room", "d")}
                                            >-</button>
                                            <span>{state.options.room}</span>
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