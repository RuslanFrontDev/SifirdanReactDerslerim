import { memo, useCallback, useMemo, useReducer, useState } from "react";
import reducer from "./reducers/todoReducer";
import InputForm from "./components/InputForm";
import Todos from "./components/Todos";

function App() {
 console.log("App renderd");
 const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    input:'',
    deyerler:[],
    search:''
  })
  const changeInput = useCallback((e)=>{
    dispatch({
      type: 'changed_input',
      value: e.target.value
    })
  },[])
  const addData =useCallback( (e)=>{
    dispatch({
      type: 'add_data',
      value: state.input
    })
  },[state.input])
  const searchData = (e)=>{
    dispatch({
      type:'search_data',
      value:e.target.value
    })
  }
  const filteredData = useMemo(()=>{
return state.deyerler.filter(deyer=>deyer.toLowerCase().includes(state.search.toLowerCase()))
  },[state.deyerler, state.search])
  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count=>count+1)}>Artir</button>
    </div>
    <hr/>
    <input type="text" value={state.search} placeholder="axtar" onChange={searchData}/>
    {state.search}
    <hr/>
      <div>
        <InputForm input={state.input} changeInput={changeInput} addData={addData}/>
        <Todos deyerler={filteredData}/>
      </div>
    </>
  );
}

export default memo(App);
