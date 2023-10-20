function reducer(state, action) {
   switch (action.type) {
     case "changed_input":{
       return {
         ...state,
         input:action.value,
       }
     }
       case "add_data":{
         return{
           ...state,
           input:'',
           deyerler:[
             ...state.deyerler,
             state.input
           ]
         }
       }
       case "search_data":{
         return{
           ...state,
          search:action.value
         }
       }
     default:
       break;
   }
 }
 export default reducer