import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/blog/Blog";
import BlogLayout from "./components/blog/BlogLayout";
import Categories from "./components/blog/Categories";
import Memory from "./components/blog/Memory";
import Post from "./components/blog/Post";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      {/* 1. ornek Routes, Route, Link, NavLink */}
      {/* <nav>
      <NavLink to={"/"} className={({isActive})=>isActive && "aktiv"}>Home</NavLink>
      <NavLink to={"/about"} style={({isActive})=>({
        background: isActive? "red": "blue"
      })}>About</NavLink>
      <NavLink to={"/blog"}>
        {({isActive})=>(
          <>
          Blog
          {isActive && "Aktiv"}
          </>
        )}
      </NavLink>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes> */}
      {/* ................................................................. */}
      {/* 2. ornek NEsted ve dinamik Route */}

      {/* <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="memory" element={<Memory/>}/>
        </Route>
      </Routes> */}
      {/* ............................................ */}
      {/* 3. ornek useParams */}
       {/* <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="memory" element={<Memory/>}/>
          <Route path="post/:id/:url" element={<Post/>}/>
        </Route>
      </Routes> 
       */}
       {/* .............................................................. */}
       {/* 4. ornek 404 */}
       <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogLayout />}>
          <Route index={true} element={<Blog/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="memory" element={<Memory/>}/>
          <Route path="post/:id/:url" element={<Post/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes> 
      
    </>
  );
}

export default App;
