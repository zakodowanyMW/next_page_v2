"use client";
import { createContext, useState } from "react";

// create context
export const DarkModeContext = createContext(null);


//creat context Provider - musimy tutaj bo inne komponenty są SSR
export const DarkModeContextProvider = ({children}) => {
    const [colorMode, setColorMode] = useState("dark");
    return (
        <DarkModeContext.Provider value={{colorMode, setColorMode}}>
            <div className={`theme ${colorMode}`}>
                {children}
            </div>
        </DarkModeContext.Provider>
    )
}
