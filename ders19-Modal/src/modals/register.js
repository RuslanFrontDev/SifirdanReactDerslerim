import React from 'react'
import { destroyModal } from '../utils/modal'

const register = () => {
  return (
    <div>register 
       <button className='bg-red-400 p-1 rounded' onClick={destroyModal}>Bagla</button><br />
    </div>
  )
}

export default register