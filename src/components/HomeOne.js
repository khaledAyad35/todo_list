import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeOne = () => {
    const Navigate = useNavigate()
    return (<>
        <div>
            <h1>Home</h1>
        </div>
        <button onClick={() => { Navigate("order-summary") }}>Place Order</button>



    </>

    )
}
export default HomeOne