
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

interface IHeaderProps {
    type: string
}

export function Header({ type }: IHeaderProps) {
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
            case 'OPEN_DATE': {
                return { ...state, openDate: !state.openDate }
                // return  state.openDate = !state.openDate as boolean;
            }
            case 'DATE': {
                return { ...state, date: [action.payload.dateSelected] };
            }
            case 'OPEN_OPTIONS': {
                return { ...state, openOptions: !state.openOptions }
            }
            case 'OPTIONS': {
                switch (action.payload.name) {
                    case 'adult':
                        return action.payload.operation === "i" ?
                            { ...state, adult: state.options.adult++ } :
                            { ...state, adult: state.options.adult-- }
                    case 'children':
                        return action.payload.operation === "i" ?
                            { ...state, children: state.options.children++ } :
                            { ...state, children: state.options.children-- }
                    case 'room': {
                        return action.payload.operation === "i" ?
                            { ...state, room: state.options.room++ } :
                            { ...state, room: state.options.room-- }
                    }
                    default:
                        throw new Error();
                }
            }
            default:
                throw new Error();
        }
        return state
    }, initialValuesReducer);

    function handleOption(name: string, operation: string) {
        dispatch({
            type: 'OPTIONS',
            payload: { name: name, operation: operation }
        })
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
                                <input type="text" placeholder="Where are you going?"
                                    className={styles.headerSearchInput} />
                            </div>
                            <div className={styles.headerSearchItem}>

                                <FontAwesomeIcon icon={faCalendarDays} className={styles.headerIcon} />
                                <span onClick={() => {
                                    dispatch({ type: "OPEN_DATE" })
                                }} className={styles.headerSearchText}> {format(state.date[0].startDate!, 'MM/dd/yyyy')} to {format(state.date[0].endDate!, 'MM/dd/yyyy')} </span>
                                {state.openDate && <div onClick={() => dispatch({ type: "OPEN_DATE" })} className={styles.closeDateRange}></div>}
                                {state.openDate && <DateRange
                                    className={styles.date}
                                    editableDateInputs={true}
                                    onChange={item => { dispatch({ type: "DATE", payload: { dateSelected: item.selection } }) }}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state.date}
                                />}

                            </div>
                            <div className={styles.headerSearchItem}>
                                <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
                                <span
                                    onClick={() => dispatch({ type: "OPEN_OPTIONS" })}
                                    className={styles.headerSearchText}>
                                    {` ${state.options.adult} adult ${state.options.children} children ${state.options.room} room`}
                                </span>
                                {state.openOptions && <div onClick={() => dispatch({ type: "OPEN_OPTIONS" })} className={styles.closeDateRange}></div>}
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
                                                disabled={state.options.children == 0}
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
                                <button className={styles.headerBtn}> Search </button>

                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}