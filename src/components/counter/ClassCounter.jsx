/** @format */

import React, { Component } from 'react'
class ClassCounter extends Component {
  state = {
    name: '',
    count: 0
  }
  componentDidMount() {
    console.log('componentDidMount')
    document.title = `clicked ${this.state.count}times`
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('cdu')
      document.title = `clicked ${this.state.count}times`
    }
  }
  render() {
    return (
      <div>
        <input
          type='text'
          onChange={e => this.setState({ name: e.target.value })}
        />

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count: {this.state.count}
        </button>
      </div>
    )
  }
}

export default ClassCounter
