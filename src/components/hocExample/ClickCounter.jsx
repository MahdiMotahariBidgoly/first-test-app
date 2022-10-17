/** @format */
import WithCounter from '../hoc/WithCount'
const Clickcounter = ({ count, incrementCounter }) => {
  return (
    <div>
      <h4 onClick={incrementCounter}>Clicked{count}times</h4>
    </div>
  )
}

export default WithCounter(Clickcounter, 5)
