import { useReducer, useState } from "react";
import reducer from "./reducers/todoReducer";

function App() {
  // 1. ornek-----
  // const [input, setInput] = useState("");
  // const [deyerler, setDeyerler] = useState([]);
  // const changeInput = (e)=>{
  //   setInput(e.target.value)
  // }
  // const addData = ()=>{
  //   setDeyerler([...deyerler, input]);
  //   setInput('')
  // }
  //..............................................
  // 2ci ornek
 
  const [state, dispatch] = useReducer(reducer, {
    input:'',
    deyerler:[]
  })
  const changeInput = (e)=>{
    dispatch({
      type: 'changed_input',
      value: e.target.value
    })
  }
  const addData = (e)=>{
    dispatch({
      type: 'add_data',
      value: state.input
    })
  }
  return (
    <>
      <div>
        <input type="text" value={state.input} onChange={changeInput}/>
        <button onClick={addData}>Elave et</button>
        <ol>
          {state.deyerler.map((deyer, index) => (
            <li key={index}>{deyer}</li>

          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
