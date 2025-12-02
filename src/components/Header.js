import React, { Fragment, useState, useContext } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import css from "../styles.js"

import RoleContext from '../context/RoleContext.js'

function Header() {
    const { roleProvider } = useContext(RoleContext)


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

                    {roleProvider.userRole == 'admin' && <css.NavLink to="/admin">Admin</css.NavLink>}
                </css.NavLinks>
            </css.Nav>
        </css.HeaderContainer>
    );
}

export default Header;
