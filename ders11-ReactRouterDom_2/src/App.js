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
// Navigate, useNavigate
function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<HomeLayout />} >
        <Route index={true} element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog />} />
          <Route path="categories" element={<Categories />} />
          <Route path="memory" element={<Memory />} />
          <Route path="post/:id/:url" element={<Post />} />
        </Route>
        </Route>
        {/* 2. novbede ise Login */}
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<Login/>}/>

        </Route>
        {/* 1. novbede Profile-ni yazdim */}
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;
