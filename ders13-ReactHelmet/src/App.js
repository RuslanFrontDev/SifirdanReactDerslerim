import { Helmet } from "react-helmet";
import { Link, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";

function App() {

  return (
    <>
      <Helmet>
        {/* <meta charSet="utf-8" /> */}
        <title>Ana sehife</title>
        {/* <meta name="description" content="Nested component" /> */}
      </Helmet>
      <nav>
        <Link to={"/blog"}>Blog</Link>
      </nav>

      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
