import { ISearchStateReducer } from "../../components/Header/Index";

export function SearchReducer(state: ISearchStateReducer, action: any) {

    switch (action.type) {
        case 'DESTINATION': {
            console.log(action.payload.destination)
            return { ...state, destination: action.payload.destination }
        }
        case 'OPEN_DATE': {
            return { ...state, openDate: !state.openDate }
        }
        case 'DATE': {
            return { ...state, date: [ action.payload.dateSelected ] };
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
}