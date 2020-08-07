import React, { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button
            style={{ float: 'left' }}
            onClick={toggleTheme}
        >
            toggle theme
        </button>
    )
}