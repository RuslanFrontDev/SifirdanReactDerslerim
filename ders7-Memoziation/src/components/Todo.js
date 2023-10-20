import React, { memo } from 'react'

const Todo = ({deyer}) => {
   console.log("Todo renderd "+deyer);
  return (
   <li >{deyer}</li>

  )
}

export default memo(Todo)