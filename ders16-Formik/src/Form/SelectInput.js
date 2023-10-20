import { useField } from 'formik'
import React from 'react'

const SelectInput = ({ label, options, ...props }) => {
   const [field, meta, helpers] = useField(props);
   const changeHandle = (e) => {
      let selected = options.filter(option => option.value === e.target.value)
      helpers.setValue(selected || e.target.value);
   }
   return (
      <div className='inline-block w-full'>
         <div className=' border-blue-100 border-dotted border-b-4 w-20'>{label}</div>
         {/* defaultValue vermeyimizdeki sebeb selecti secdiyimiz zaman deyerin de deyismesidi */}
         <select className='border-black  border-b-2 w-full outline-none focus:text-lg' defaultValue={field.value} onChange={changeHandle} {...props}>
            <option>sec</option>
            {options.map(option => (
               <option key={option.key} value={option.value}>{option.value}</option>
            ))}
         </select>
      </div>
   )
}

export default SelectInput