import React from 'react'
import { UseAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth = UseAuth()
    const navigate = useNavigate()
    const handelLogout = () => {
        auth.logout()
        navigate("/")

    }
    return (
        <div>
            <h1>wellcome {auth.user}</h1>
            <button type='button' onClick={handelLogout}>logout</button>


        </div>
    )
}

export default Profile
