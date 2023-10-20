import { ErrorMessage, useField } from 'formik';
import React, { useState } from 'react';
import { BiSolidShow } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import classNames from 'classnames';

const PasswordInput = ({ label, type = "password", ...props }) => {
   const [field, meta, helpers] = useField(props);
   const [isPasswordVisible, setPasswordVisibility] = useState(false);

   const togglePasswordVisibility = () => {
      setPasswordVisibility(!isPasswordVisible);
   };

   return (
     <>
      <label className='inline-block w-full'>
         <div className='border-blue-100 border-dotted border-b-4 w-20'>
            {label}
         </div>
         <div className='flex items-center justify-end relative'>
            <input
               value={field.value}
               onChange={field.onChange}
               type={isPasswordVisible ? "text" : "password"}
               {...props}
               className={classNames({
                  'border-black  border-b-2 w-full outline-none focus:text-lg':true,
                  "border-b-red-600": meta.error && meta.touched,
               })}
               onBlur={() => helpers.setTouched(true)} // meta.touch true olacaq
            />
            <button type='button' onClick={togglePasswordVisibility} className='absolute'>
               {isPasswordVisible ? <BiSolidShow size={30} /> : <AiFillEyeInvisible size={30} />}
            </button>
         </div>
      </label>
      {meta.touched && meta.error && (
        <ErrorMessage name={field.name} component={'small'} className='bg-red-400 p-1 border-x-4 border-red-800'/>
      )}
     </>
   );
}



export default PasswordInput;
