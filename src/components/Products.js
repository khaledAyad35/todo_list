import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <input type='"text' placeholder='search Product...'></input>
      <nav>
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>

      </nav>
      <Outlet></Outlet>
    </>
  )
}

export default Products
