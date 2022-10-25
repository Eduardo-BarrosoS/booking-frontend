import { createContext, ReactNode, useReducer } from "react"
import { Range } from "react-date-range";
import { dateAction, destinationAction, openDateAction, openOptionsAction, optionsAction } from "../reducers/reserve/action";
import { SearchReducer } from "../reducers/reserve/reducer";

export interface ISearchStateReducer {
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
interface ISearchContext {
    searchState: ISearchStateReducer,
    destinationDispatch: (destination: string) => void,
    openDateDispatch: () => void,
    dateDispatch: (dateSelected: Range ) => void,
    openOptionsDispatch: () => void,
    optionsDispatch: ( name: string, operation: string ) => void,
}

interface SearchContextProviderProps {
    children: ReactNode,
}

export const SearchContext = createContext({} as ISearchContext)

export function SearchContextProvider( { children }: SearchContextProviderProps) {

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

    const [searchState, dispatch] = useReducer( SearchReducer, initialValuesReducer);


    function destinationDispatch(destination: string) {
        dispatch( destinationAction(destination) )
    }
    function openDateDispatch() {
        dispatch( openDateAction() )
    }
    function dateDispatch( dateSelected: Range ) {
        dispatch( dateAction( dateSelected ) ) 
    }
    function openOptionsDispatch() {
        dispatch( openOptionsAction() )
    }
    function optionsDispatch( name: string, operation: string) {
        dispatch( optionsAction(name , operation) )
    }
    

    return (
        <SearchContext.Provider 
            value={{
                searchState,
                destinationDispatch,
                openDateDispatch,
                dateDispatch,
                openOptionsDispatch,
                optionsDispatch,

            }}
        >
            {children}
        </SearchContext.Provider>
        )
    }
