/** @format */

// class component:

// import React, { Component } from 'react'
// class MyCounter extends Component {
//   state = { count: 0 }

//   increment = () => {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }))
//   }
//   render() {
//     return (
//       <div>
//         <h2>Counter</h2>
//         {this.state.count}
//         <button onClick={this.increment}>+ add</button>
//       </div>
//     )
//   }
// }
// export default MyCounter

//session19//
// throw constructor

// import React, { Component } from 'react'
// class MyCounter extends Component {
//   state = { count: 0 }

//   constructor(props) {
//     super(props)
//     this.countHandler = this.countHandler.bind(this)
//     console.log(this.countHandler)
//   }
//   countHandler() {
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     return (
//       <div>
//         <h2>Counter</h2>
//         {this.state.count}
//         <button onClick={this.countHandler}>count</button>
//       </div>
//     )
//   }
// }
// export default MyCounter

// session 19 changing this reference throw arrow function which is best way//

// import React, { Component } from 'react'
// class MyCounter extends Component {
//   state = { count: 0 }

//   // constructor(props) {
//   //   super(props)
//   //   this.countHandler = this.countHandler.bind(this)
//   //   console.log(this.countHandler)
//   // }

//   countHandler = () => {
//     console.log('count click', this)
//     this.setState({ count: this.state.count + 1 })
//   }
//   render() {
//     return (
//       <div>
//         <h2>Counter</h2>
//         {this.state.count}
//         <button onClick={this.countHandler}>count</button>
//       </div>
//     )
//   }
// }
// export default MyCounter

// session21 pass argument to event
import React, { Component } from 'react'
class MyCounter extends Component {
  state = { count: 0 }
  countHandler = id => {
    console.log('count click', id)
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        {this.state.count}
        {/* <button onClick={this.countHandler.bind(this, 2)}> */}
        <button onClick={() => this.countHandler(2)}>counte</button>
      </div>
    )
  }
}
export default MyCounter
