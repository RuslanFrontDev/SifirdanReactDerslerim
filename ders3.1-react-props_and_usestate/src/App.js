import { useState } from "react";
import Tab from "./component/Tab";

function App() {
  const [change, setChange] = useState(1)
  return (
    <>
    <button onClick={()=>setChange(2)}>Paneli deyis</button>
    <Tab activeTab = {change} setChange = {setChange}>
      <Tab.Panel title='home'>1. Panel</Tab.Panel>
      <Tab.Panel title='about'>2. Panel</Tab.Panel>
      <Tab.Panel title='link'>3. Panel</Tab.Panel>
    </Tab>
    </>
  );
}

export default App;
