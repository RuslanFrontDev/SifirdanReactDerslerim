import { useField } from 'formik'
import React from 'react'

const EmailInput = ({ label, ...props }) => {
   const [field, meta, helpers] = useField(props);
  // 2.ornek Email
//   const [email, setEmail] = useState('');

  const emailInput = (e) => {

   helpers.setValue(e.target.value)
  }
  const addemail = (e) => {
    const emailCode = "@gmail.com"
    if (!(field.value === "")) {
      if (!field.value.includes(emailCode)) {
        helpers.setValue(field.value + emailCode)
      }
    }
  }
   return (
      <label className='inline-block w-full'>
         <div className=' border-blue-100 border-dotted border-b-4 w-20'>
            {label}
         </div>
         <input value={field.value} onChange={emailInput} onBlur={addemail} {...props}  className='border-black  border-b-2 w-full outline-none focus:text-lg'/>
      </label> 
   )
}

export default EmailInput