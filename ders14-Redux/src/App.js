import { useState } from "react";
import { AddForm } from "./components/AddForm";
import Lists from "./components/Lists";

function App() {
  const [text, setText] = useState('');
  const [lists, setLists] = useState([]);
  const changeInput = (e) => {
    setText(e.target.value)
  }
  const addForm = () => {
    setText('')
    setLists(lists => [...lists, text])
  }
  return (
    <>
      <AddForm />
      <Lists lists={lists} />
    </>
  );
}

export default App;
