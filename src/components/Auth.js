import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const Auth = createContext(null)
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
    }
    return (<Auth.Provider value={{ user, login, logout }}>
        {children}
    </Auth.Provider>)
}
export const UseAuth = () => {
    return useContext(Auth)
}