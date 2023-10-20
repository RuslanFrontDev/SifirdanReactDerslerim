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
     default:
       break;
   }
 }
 export default reducer