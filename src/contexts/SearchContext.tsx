import { createContext, ReactNode } from "react"


interface ISearchContext {
    
}

interface SearchContextProviderProps {
    children: ReactNode,
}

export const searchContext = createContext({} as ISearchContext)

export function SearchContextProvider( { children }: SearchContextProviderProps) {

    

    return (
        <searchContext.Provider 
            value={}
        >
            {children}
        </searchContext.Provider>
        )
    }
