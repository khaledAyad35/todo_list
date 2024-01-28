import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseAuth } from './Auth'

const NavBar = () => {
    const Auth = UseAuth()
    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        {!Auth.user && <NavLink to={"/login"}>login</NavLink>}

    </nav>


}

export default NavBar
