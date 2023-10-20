import React, { memo } from 'react'

const InputForm = ({input, changeInput, addData}) => {
   console.log("InputForm renderd");
  return (
    <>
        <input type="text" value={input} onChange={changeInput}/>
        <button onClick={addData}>Elave et</button>
    </>
  )
}

export default memo(InputForm)