import { useField } from 'formik'
import React from 'react'

const TextInput = ({ label, ...props }) => {
   const [field, meta, helpers] = useField(props);

   return (
      <label className='inline-block w-full'>
         <div className=' border-blue-100 border-dotted border-b-4 w-20'>
            {label}
         </div>
         <input {...field} {...props}  className='border-black  border-b-2 w-full outline-none focus:text-lg'/>
      </label> 
   )
}

export default TextInput