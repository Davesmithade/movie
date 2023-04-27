import React from 'react'
import "../../css/Styles.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
        <div className="logonav flex bg-black h-16 px-12 items-center text-white font-medium justify-between">
        <div className="logo">
            <NavLink to="/">
            <h1 className='text-blue-900 text-[24px] font-serif'>⚡MovieClaw⚡</h1>
            </NavLink>
        </div>
        <div className="nav items-center">
            <ul className='flex gap-12'>
                <NavLink to="/">
                <li className=''>Home</li>
                </NavLink>
                <NavLink to="/about">
                <li className=''>About</li>
                </NavLink>
                <li>Services</li>
                <li>WhiteList</li>
                <li>Coins</li>
                <li>Trade</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar