import React, { useEffect, useState } from 'react'
// 2. ornek 1.destroy orneyi
// const Header = () => {
//    useEffect(() => {
//       console.log('Header render');
//       return()=>{
//          console.log('destroy');
//       }
//     },[])

//   return (
//    <>
//    Header
//    </>
//   )
// }
// 3. ornek 2.destroy orneyi
// const Header = () => {
//    useEffect(() => {
//       let int = setInterval(()=>{
//          console.log("Header render");
//       },2000)
//       return()=>{
//          clearInterval(int)
//       }
//     },[])

//   return (
//    <>
//    Header
//    </>
//   )
// }
// 4. ornek
const Header = () => {
   const [first, setfirst] = useState(0)
   console.log(first);
   useEffect(() => {
      let int = setInterval(()=>{
         setfirst(first => first + 1)
         setfirst(first => first + 1)
         setfirst(first => first + 1)
      },1000)
      return()=>{
         clearInterval(int)
      }
   }, [])
   return (
      <>
         <button onClick={() => setfirst(first => first + 1)}>Artir</button>
         <h1>{first}</h1>
         <br />
         Header
      </>
   )
}



export default Header