/** @format */
import WithCounter from '../hoc/WithCount'
const Hovercounter = ({ count, incrementCounter }) => {
  return (
    <div>
      <h4 onMouseOver={incrementCounter}>Hovered{count} times</h4>
    </div>
  )
}

export default WithCounter(Hovercounter, 10)
