import { ErrorMessage, useField } from 'formik'
import React from 'react'

const SelectInput = ({ label, options, ...props }) => {
   const [field, meta, helpers] = useField(props);
   console.log(field.name);
   const changeHandle = (e) => {
      const selectedValue = e.target.value;
      helpers.setValue(selectedValue);
   }

   return (
      <div className='inline-block w-full'>
         <div className=' border-blue-100 border-dotted border-b-4 w-20'>{label}</div>
         {/* defaultValue vermeyimizdeki sebeb selecti secdiyimiz zaman deyerin de deyismesidi */}
         <select className='border-black  border-b-2 w-full outline-none focus:text-lg' defaultValue={field.value} onChange={changeHandle} onBlur={() => helpers.setTouched(true)} {...props}>
            <option value={""}>sec</option>
            {options.map(option => (
               <option key={option.key} value={option.value}>{option.value}</option>
            ))}
         </select>
         <ErrorMessage name={field.name} component={'small'} className='bg-red-400 p-1 border-x-4 border-red-800' />
      </div>
   )
}

export default SelectInput