import classNames from 'classnames';
import { useField } from 'formik'
import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const CheckInput = ({ label, ...props }) => {
   const [field, meta, helpers] = useField(props);
   const checkHandle = () => {
      helpers.setValue(!field.value)
   }
   return (
      <label className='inline-block w-52'>
         <div className=' border-blue-100 border-dotted border-b-4 w-52'>
            {label}
         </div>
         <button type='button' onClick={checkHandle} className={classNames({
            'border w-5 h-5 flex items-center justify-center text-lg  font-bold': true,
            "bg-blue-500 text-white": field.value,
            "bg-red-500": !field.value
         })}>
            {field.value && <AiOutlineCheck className=' pointer-events-none' />}
         </button>
      </label>
   )
}

export default CheckInput