import React, { useState } from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const auth = UseAuth()
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const handlelogin = () => {
        auth.login(user)
        navigate("/", { replace: true })



    }

    return (
        <div>
            <label>
                username : <input onChange={(e) => setUser(e.target.value)} type='text' name='username' placeholder='user name'></input>
            </label>
            <button type='button' onClick={handlelogin}>login</button>

        </div>
    )
}

export default Login
