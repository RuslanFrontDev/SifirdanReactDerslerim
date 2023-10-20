import classNames from 'classnames';
import { useField } from 'formik'
import { useEffect, useState } from 'react';

const FileInput = ({ label, ...props }) => {
   const [field, meta, helpers] = useField(props);
   const [file, setFile] = useState(null)
   const fileHandle = (e) => {
      helpers.setValue(e.target.files[0]);
      setFile(null);
   }
   useEffect(() => {
      if (field.value) {
         const fileReader = new FileReader();

         fileReader.addEventListener("load", function () {
            setFile(this.result)
         })
         fileReader.readAsDataURL(field.value);
      }
   }, [field.value])
   return (
      <label>
         <div className='hidden'>
            <input onChange={fileHandle} {...props} />
            {file && <img src={file} alt="File" />}
         </div>
         <button type="button" className={classNames({
            ' pointer-events-none bg-blue-200 p-2 rounded text-lg font-bold w-30 text-blue-900': true,
            "bg-blue-600 text-white": field.value
         })}>
            {!field.value && <label>{label}</label>}
            {field.value && <label className={classNames({
               ' whitespace-nowrap': true,
               " text-white": field.value
            })}>Dosya Secildi</label>}
         </button>
      </label>
   )
}

export default FileInput