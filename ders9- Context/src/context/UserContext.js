import { createContext, useContext, useState } from "react";
const Context = createContext();
export const UserProvider = ({children})=>{
   const [user, setUser] = useState("ruslan");
   const data = {
      user,
      setUser
   }
   return (<Context.Provider value={data}>{children}</Context.Provider>)
}
export const useUser = ()=>useContext(Context)