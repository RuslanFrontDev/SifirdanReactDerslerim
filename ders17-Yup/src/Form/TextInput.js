import classNames from 'classnames';
import { ErrorMessage, useField } from 'formik'
import React from 'react'

const TextInput = ({ label, ...props }) => {
   const [field, meta, helpers] = useField(props);
   // ilk olaraq undefined verecek, ancak gonder butonuna basdigim zaman errorum gelecek
   return (
      <label className='inline-block w-full'>
         <div className=' border-blue-100 border-dotted border-b-4 w-20'>
            {label}
         </div>
         <input {...field} {...props} className={classNames({
            'border-black  border-b-2 w-full outline-none focus:text-lg':true,
            "border-b-red-600": meta.error && meta.touched,
         })} />
         <ErrorMessage  name={field.name} component={'small'} className='bg-red-400 p-1 border-x-4 border-red-800' />
      </label>
   )
}

export default TextInput