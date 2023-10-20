import React, { useState } from 'react';
import PropsComponent from './component/PropsComponent';

const App = () => {
  const surname = "toplama";
  const [count, setCount] = useState(0)

  return (
    <>
      <PropsComponent name="cixma" surname={surname} deyer={count} setCount={setCount}/>
    </>
  );
};

export default App;
