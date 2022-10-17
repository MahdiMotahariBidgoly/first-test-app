/** @format */

import { useState, useEffect } from 'react'
const FunctionalTimer = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('to be likely cdm')
      setCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count])
  return <div>Functional Timer</div>
}

export default FunctionalTimer
