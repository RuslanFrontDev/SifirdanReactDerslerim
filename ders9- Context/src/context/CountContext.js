import { createContext, useContext, useState } from "react";
const Context = createContext();
export const CountProvider = ({children})=>{
   const [count, setCount] = useState(0);
   const data = {
      count,
      setCount
   }
   return (<Context.Provider value={data}>{children}</Context.Provider>)
}
export const useCount = ()=>useContext(Context)