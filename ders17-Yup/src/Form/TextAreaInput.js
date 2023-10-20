import classNames from 'classnames';
import { ErrorMessage, useField } from 'formik'
import React from 'react'

const TextAreaInput = ({ label, ...props }) => {
   const [field, meta, helpers] = useField(props);

   return (
      <>
         <label className='inline-block w-full'>
            <div className=' border-blue-100 border-dotted border-b-4 w-44'>
               {label}
            </div>
            <textarea {...field} {...props}   className={classNames({
                  'border-black  border-b-2 w-full outline-none focus:text-lg':true,
                  "border-b-red-600": meta.error && meta.touched,
               })}
             onBlur={() => helpers.setTouched(true)} // meta.touch true olacaq
            ></textarea>
         </label>
         <ErrorMessage name={field.name} component={'small'} className='bg-red-400 p-1 border-x-4 border-red-800' />
      </>
   )
}

export default TextAreaInput