import React, { createContext, useState, useContext } from 'react';

// Create a Context
const ThemeContext = createContext();

// Create a Provider Component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app-theme-${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext }