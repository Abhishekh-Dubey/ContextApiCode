import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const [state, setState] = useState(0);
    const handlechange = (change) =>{
        setState(change);
    }
    return <AppContext.Provider value={{state, handlechange}}>
        {children}
    </AppContext.Provider>
};