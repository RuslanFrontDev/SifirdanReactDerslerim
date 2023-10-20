import { ErrorMessage, useField } from 'formik'
import React from 'react'

const RadioInput = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <div>
        <div>{label}</div>
        {options.map((option, index) => (
          <div key={index}>
            <input type='radio' value={option.key} checked={field.value === option.key} onChange={(e) => helpers.setValue(e.target.value)} {...props} />
            {option.value}</div>
        ))}
      </div>
      <ErrorMessage name={field.name} component={'small'} className='bg-red-400 p-1 border-x-4 border-red-800' />
      <br />
    </>
  )
}

export default RadioInput