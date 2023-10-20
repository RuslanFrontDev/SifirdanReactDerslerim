import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HomeLayout = () => {
   return (
      <>
         <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
            <NavLink to={"/auth/login"}>Login</NavLink>
         </nav>
         <Outlet/>
      </>
   )
}

export default HomeLayout