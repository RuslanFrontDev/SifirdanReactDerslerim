import React, { memo } from 'react'
import Todo from './Todo'

const Todos = ({deyerler}) => {
   console.log("Todos renderd");
  return (
   <ol>
   {deyerler.map((deyer, index) => (
    <Todo deyer={deyer} key={index}/>
   ))}
 </ol>
  )
}

export default memo(Todos)