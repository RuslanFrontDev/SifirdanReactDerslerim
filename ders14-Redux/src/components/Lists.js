import React from 'react'
import List from './List'
import { useSelector } from 'react-redux';

const Lists = () => {
   const lists = useSelector((state) => state.listStore.lists);

   return (
      <div>
         <ul>
            {lists.map((list, index) => (
               <List key={index} list={list} />
            ))}
         </ul>
      </div>
   )
}

export default Lists