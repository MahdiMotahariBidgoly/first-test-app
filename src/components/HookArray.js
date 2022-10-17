/** @format */
// porfational way

// import { useState } from 'react'
// const HooksArray = () => {
//   const [item, setItem] = useState([])

//   const addItemHandler = () => {
//     setItem([
//       ...item,
//       { id: item.length, number: Math.floor(Math.random() * 20) }
//     ])
//   }
//   return (
//     <div>
//       <button onClick={addItemHandler}>add Item</button>
//       {item.map(item => {
//         return <li key={item.id}>{item.number}</li>
//       })}
//     </div>
//   )
// }

// export default HooksArray

import { useState } from 'react'
const HooksArray = () => {
  const [item, setItem] = useState([])

  const addItemHandler = () => {
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 30)
    }
    const updatedItem = [...item, addedItem]
    setItem(updatedItem)
  }

  return (
    <div>
      <button onClick={addItemHandler}>add Item</button>
      {item.map(item => {
        return <li key={item.id}>{item.number}</li>
      })}
    </div>
  )
}

export default HooksArray
