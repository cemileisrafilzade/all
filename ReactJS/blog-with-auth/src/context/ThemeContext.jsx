// 1. Create ThemeContext instance
// 2. Create ThemeContextProvider
// 3. Inside Provider create data with colors
//  {background: 'black', color: 'white'}
// 4. Prepare method to toggle colors
// {
//     light: {background: 'white', color: 'black'},
//     dark: {background: 'grey', color: 'white'}
// }
// 5. Connect context to app (Wrap app with Provider)
// 6. Connect at lest one component to this context & use styles on some element
// 7. Create toggle element in left side of header which will change theme (Use input type="radio")

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const THEME = {
    light: {
        color: 'black',
        background: 'white'
    },
    dark: {
        color: 'white',
        background: 'grey'
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [type, setType] = useState('dark');

    const toggleTheme = () => setType(type => type === "light" ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{
            theme: THEME[type],
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
