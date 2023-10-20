import React from 'react'
import { useCount } from '../context/CountContext'
import { useUser } from '../context/UserContext';

const Count = () => {
   const {count, setCount} = useCount();
   const {user} = useUser();
   return (
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
         <small>{user}</small>
         <h1>{count}</h1>
         <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", gap: "5px" }}>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
         </div>
      </div>
   )
}

export default Count