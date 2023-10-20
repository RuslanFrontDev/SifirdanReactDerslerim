import React from 'react'

const YeniDovrdeYazilankodlar = () => {
   const name = "Ruslan"
   const arr = ["ruslan", "nurlan", "eli"]
   return (
      <>
         <div>
            <div>
               {/* <h1>Ruslan</h1> */}
               <h1>{name}</h1>
            </div>
         </div>
         <div>
            <h2>Rustemov</h2>
         </div>
         {/* .forEach döngüsü, bir dizi üzerinde işlem yaparken herhangi bir değer döndürmez ve bu nedenle JSX içinde doğru şekilde işlenmez. */}
         {/* {arr.forEach(names => {
            <div>{names}</div>
         })} */}
         {/* .............................................. */}
         {/* {arr.map(names => (
            <div>{names}</div>
         ))} */}
         {/* .................................................. */}
         {arr.map(names => {
            return (
               <div>{names}</div>
            )
         })}
      </>
   )
}

export default YeniDovrdeYazilankodlar