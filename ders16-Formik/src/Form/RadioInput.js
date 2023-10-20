import { useField } from 'formik'
import React from 'react'

const RadioInput = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
 
  return (
    <div>
      <div>{label}</div>
      {options.map((option, index) => (
        <div  key={index}>
          <input type='radio' value={option.key} checked={field.value === option.key} onChange={(e)=>helpers.setValue(e.target.value)} {...props} />
          {option.value}</div>
      ))}
    </div>
  )
}

export default RadioInput