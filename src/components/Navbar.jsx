import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-6 max-w-1280px mx-auto shadow-2xl p-5'>
        <Link to={"/"}>Logo</Link>
        <ul className="flex items-center gap-10 text-accent">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar