import React, { Fragment, useState, useContext } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import css from "../styles.js"

import { ThemeProvider, ThemeContext } from "../context/RoleContext";

// Consume Context in a Component
const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    );
};


function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { userRole, setUserRole } = useState('user');


    return (
        <css.HeaderContainer>
            <css.Nav>
                <css.Logo to="/">STEM 2026 Registration</css.Logo>
            </css.Nav>
            <css.Nav>
                <css.NavLinks>
                    <css.NavLink to="/">Register</css.NavLink>
                    <css.NavLink to="/volunteer_registration">Volunteer</css.NavLink>
                    <css.NavLink to="/login">Login</css.NavLink>
                    <css.Text>{global.userRole}</css.Text>
                    {global.userRole === 'admin' && <css.NavLink to="/admin">Admin</css.NavLink>}
                </css.NavLinks>
            </css.Nav>
        </css.HeaderContainer>
    );
}

export default Header;
