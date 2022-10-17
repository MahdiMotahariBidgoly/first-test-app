/** @format */

import { useState } from 'react'
const WithCounter = (WrappedComponent, incerementValue) => {
  const UpdatedComponent = props => {
    const [count, setCount] = useState(0)
    const incrementCounter = () => {
      setCount(count + incerementValue)
    }
    return (
      <WrappedComponent
        count={count}
        incrementCounter={incrementCounter}
        {...props}
      />
    )
    return UpdatedComponent
  }
}
export default WithCounter
