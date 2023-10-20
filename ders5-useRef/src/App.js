// 1. ornek----
// import { useEffect, useRef, useState } from "react";

// function App() {
//   const inputFocus = useRef();
//   const [name, setName] = useState('')
//   const inpFocus = (e) => {
//     setName("ruslan")
//     inputFocus.current.focus()
//     inputFocus.current.value = name;
//   }
//   useEffect(()=>{
//     const h = document.createElement('h1');
//     h.innerText = name;
//     document.body.appendChild(h)
//   },[name])
//   return (
//     <>
//       <div>
//         <input ref={inputFocus} type="text" />
//         <button onClick={inpFocus}> Focusla</button>
//       </div>
//     </>
//   );
// }

// export default App;
// 2. ornek Forwardref
import { useRef } from "react";
import Forward from "./component/Forward";

function App() {
  const inputFocus = useRef();
  const inpFocus = (e) => {
    inputFocus.current.focus()
    inputFocus.current.value = "ruslan";
  }
 
  return (
    <>
      <div>
        <Forward ref={inputFocus} type="text" />
        <button onClick={inpFocus}> Focusla</button>
      </div>
    </>
  );
}

export default App;
