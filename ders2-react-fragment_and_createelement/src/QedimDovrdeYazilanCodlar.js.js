import React, { createElement } from 'react'

const App = () => {
  return (
    createElement('h1', {
      className:'name',
      id:"name"
    }, 'Ruslan')
  )
  
}

export default App