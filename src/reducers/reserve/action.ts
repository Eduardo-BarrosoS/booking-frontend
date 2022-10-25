import { Range } from "react-date-range"


export enum SearchActionType {
    DESTINATION = "DESTINATION",
    OPEN_DATE = "OPEN_DATE",
    DATE ="DATE",
    OPEN_OPTIONS = "OPEN_OPTIONS",
    OPTIONS = "OPTIONS",
}


export function destinationAction( destination: string) {
    return {
        type: SearchActionType.DESTINATION,
        payload: {
            destination: destination
        }
    }
}
export function openDateAction() {
    return {
        type: SearchActionType.OPEN_DATE
    }
}
export function openOptionsAction() {
    return {
        type: SearchActionType.OPEN_OPTIONS
    }
}
export function dateAction( dateSelected: Range ) {
    console.log(dateSelected)
    return {
        type: SearchActionType.DATE,
        payload: { dateSelected: dateSelected }
    }
}
export function optionsAction( name: string, operation: string ) {
    return {
        type: SearchActionType.OPTIONS,
        payload: { name: name, operation: operation }
    }
}