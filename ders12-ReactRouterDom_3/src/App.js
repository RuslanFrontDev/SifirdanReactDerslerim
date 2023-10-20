import { generatePath, useRoutes } from "react-router-dom";
import routes from "./routes";
import { url } from "./generatepath/utils";

// routes, generatePath, useSearchParams(bu ders compoinents-in altindaki Home komponentindedir)
function App() {
  // console.log(generatePath('post/:id/:url', {id:2, url:'lalal'}))
  // 1. ornek App-Utils
  // url('notFound')
  // 2. ornek App -Utils
  // console.log(url("home.blog.post", {
  //   id:3,
  //   url:'adana'
  // }));
  // console.log(url('home.profile'));

  return (
     useRoutes(routes)
  );
}
// ...............................................................

// eger Fragment icerisinde yazmaq istesek...
// import { useRoutes } from "react-router-dom";
// import routes from "./routes";

// // routes, 
// function App() {
//   const r =  useRoutes(routes)
//   return (
//     <>
    
//       {r}

//     </>
//   );
// }

// export default App;


export default App;
