// import classNames from 'classnames'
// import React, { useEffect, useState } from 'react'

// const Tab = ({ children, activeTab }) => {
//   const [panel, setPanel] = useState(activeTab)
//  console.log("tab-da ", panel);
//  console.log("App-da ", activeTab);
//   useEffect(() => {
//     setPanel(activeTab)
//   }, [activeTab])
//   return (
//     <>
//       <nav>
//         {children.map((link, index) => (
//           <button
//             onClick={() => setPanel(index)}
//             className={classNames({
//               blue: panel === index,
//             })} key={index}>{link.props.title}</button>
//         ))}
//       </nav>
//       {children[panel]}
//     </>
//   )
// }
// Tab.Panel = ({ children }) => {
//   return (
//     <>
//       {children}
//     </>
//   )
// }

// export default Tab
// ..........................................son olaraq asagidaki
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

const Tab = ({ children, activeTab, setChange }) => {

  return (
    <>
      <nav>
        {children.map((link, index) => (
          <button
            onClick={() => setChange(index)}
            className={classNames({
              blue: activeTab === index,
            })} key={index}>{link.props.title}</button>
        ))}
      </nav>
      {children[activeTab]}
    </>
  )
}
Tab.Panel = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default Tab