import React from 'react';

const PropsComponent = ({ name, surname, deyer, setCount }) => {
  const artir = () => {
    setCount(deyer => deyer += 1)
  }
  const azalt = () => {
    if (deyer > 0) {
      setCount(deyer -= 1)
    } else {
      return alert('0-dan kicik ola bilmez')
    }
  }

  return (
    <div>
      <h1>{name} {surname}</h1>
      <p>Değer: {deyer}</p>
      <button onClick={azalt}>Azalt</button>
      <button onClick={artir}>Artir</button>
    </div>
  );
};

export default PropsComponent;
