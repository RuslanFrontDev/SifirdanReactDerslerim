import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addForm, changeInput } from '../redux/store/listSlice';

export const AddForm = () => {
  const text = useSelector((state) => state.listStore.text);
  const dispatch = useDispatch();
  // burda da action.payload deye yazdigim e.target.value-ni yazmis oldum
  const inputHandle = (e) => {
    dispatch(changeInput(e.target.value));
  }
  const buttonHandle = () => {
    dispatch(addForm())


  }
  return (
    <div>
      <input type="text" value={text} onChange={inputHandle} />
      <button onClick={buttonHandle}>Liste elave et</button>
    </div>
  )
}
