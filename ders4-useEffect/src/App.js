import { useEffect, useState } from "react";
import Header from "./component/Header";
// 1. ornek eger men inputu Header,js-de yazcam useEffect-ler arraysiz sadece Header calisacaq
// function App() {
//   useEffect(() => {
//     console.log('App render');
//   })
//   const [val, setVal] = useState("")
  
//   return (
//     <>
//     <Header/>
//     <br/>
//     salam
//    <input value={val} onChange={(e)=>setVal(e.target.value)} type='text'/>

//     </>
//   );
// }
// .....................................................
function App() {
  useEffect(() => {
    console.log('App render');
  },[])
   const [show, setShow]= useState(true)
  return (
    <>
    <button onClick={()=>setShow(!show)}>{show ? "goster":"gizle"}</button>
    {show ?<Header/>:"null"}
    </>
  );
}
export default App;
