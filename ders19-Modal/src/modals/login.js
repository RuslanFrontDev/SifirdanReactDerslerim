import React from 'react'
import { createModal, destroyModal } from '../utils/modal'
const login = () => {
  return (
    <>
      <div>login<br/>
        <button className='bg-green-400 p-1 rounded' onClick={() => createModal('register')}>Registra Componentine daxil ol</button><br />
        <button className='bg-red-400 p-1 rounded' onClick={destroyModal}>Bagla</button><br />
      </div><br />

    </>
  )
}

export default login