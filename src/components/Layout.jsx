import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='w-7xl mx-auto py-5'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout