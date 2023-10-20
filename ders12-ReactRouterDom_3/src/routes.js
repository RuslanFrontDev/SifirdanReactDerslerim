import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/blog/Blog";
import BlogLayout from "./components/blog/BlogLayout";
import Categories from "./components/blog/Categories";
import Memory from "./components/blog/Memory";
import Post from "./components/blog/Post";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AuthLayout from "./components/login/AuthLayout";
import Login from "./components/login/Login";
import HomeLayout from "./components/HomeLayout/HomeLayout";
const routes = [
   {
      path:'/',
      name:'home',
      element:<HomeLayout/>,
      children:[
         {
            index:true,
            name:'index',
            element:<Home/>
         },
         {
            auth:true,
            name:'about',
            path:'about',
            element:<About/>
         },
         {
            path:'blog',
            name:'blog',
            element:<BlogLayout/>,
            children:[
               {
                  index:true,
                  name:'index',
                  element:<Blog/>
               },
               {
                  path:'categories',
                  name:'categories',
                  element:<Categories/>
               },
               {
                  path:'memory',
                  name:'memory',
                  element:<Memory/>
               },
               {
                  name:'post',
                  path:"post/:id/:url",
                  element:<Post/>
               },

            ]
         },
      ]
   },
   {
      path:'/auth',
      name:'auth',
      element:<AuthLayout/>,
      children:[
         {
            path:"login",
            name:'login',
            element:<Login/>
         }
      ]
   },
   {
      auth:true,
      path:'/profile',
      name:'profile',

      element:<Profile />
   },
   {
      path:'*',
      name:'notFound',
      element:<NotFound/>
   }
]
const authMap = routes=>routes.map(route=>{
   if(route?.auth){
      route.element = <PrivateRoute>{route.element}</PrivateRoute>
   }
   if(route?.children){
      route.children = authMap(route.children)
   }
   return route
})
export default authMap(routes)