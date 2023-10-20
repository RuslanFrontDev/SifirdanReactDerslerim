import { generatePath } from "react-router-dom";
import routes from "../routes";

export const url = (path, params={})=>{
   // 1. ornek App-Utils
   // routes.map(route=>{
   //    if(route.name === path){
   //       console.log(route);
   //    }
   // })
   // 2.ornek App - Utils
   let lastRoute, url
   // eslint-disable-next-line array-callback-return
   path.split('.').map(item=>{
      if(!lastRoute){
         lastRoute = routes.find(r=>r.name === item)
         url = lastRoute?.path
      }else{
         lastRoute = lastRoute?.children?.find(r=>r.name === item)
         url +=  "/"+ lastRoute?.path  
      }

   })
    return generatePath(url.replace(/\/\//gi, '/'), params)

}