/** @format */

// function component counter
import { useState } from 'react'
const HookCounter = () => {
  const [count, setcount] = useState(0)

  const incrementtwo = () => {
    setcount(prevCount => prevCount + 2)
  }

  const incrementfive = () => {
    for (let i = 0; i < 5; i++) {
      setcount(prevCount => prevCount + 1)
      console.log(incrementfive)
      //   setcount(count + 1)
    }
  }
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={() => setcount(count + 1)}>add One</button>
      <button onClick={incrementtwo}>add two</button>
      <button onClick={incrementfive}>add five</button>
    </div>
  )
}

export default HookCounter
