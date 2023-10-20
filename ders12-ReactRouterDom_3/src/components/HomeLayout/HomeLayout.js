import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { url } from '../../generatepath/utils'
const HomeLayout = () => {
   return (
      <>
         <nav>
            <NavLink to={url('home')}>Home</NavLink>
            <NavLink to={url('home.about')}>About</NavLink>
            <NavLink to={url('home.blog')}>Blog</NavLink>
            <NavLink to={url('profile')}>Profile</NavLink>
            <NavLink to={url('auth.login')}>Login</NavLink>
         </nav>
         <Outlet/>
      </>
   )
}

export default HomeLayout