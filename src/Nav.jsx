import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return <ul className="menu menu-horizontal px-1">
  <li><NavLink to='/profile' className={({isActive}) => isActive ? 'border border-green-400' : ''}>Profile</NavLink></li>
  <li><NavLink to='/login' className={({isActive}) => isActive ? 'border border-green-400' : ''}>Log In</NavLink></li>
  <li><NavLink to='/signup' className={({isActive}) => isActive ? 'border border-green-400' : ''}>Sign Up</NavLink></li>
</ul>
}

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <Links/>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FireBase React Auth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Links/>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}

export default Nav