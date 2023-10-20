import React, { forwardRef } from 'react'
//2. ornek burada her zaman props birinci gelir. ikinci yazarsaq xeta ala bilerik
const Forward = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />
  
})

export default Forward