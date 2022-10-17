/** @format */

import React, { Component } from 'react'

//session 45
class ClassTimer extends Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.myTimer = setInterval(() => {
      console.log('hi mahdi motahhari')
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }
  componentWillUnmount() {
    console.log('cwun')
    clearInterval(this.myTimer)
  }
  render() {
    return <div>classinterval</div>
  }
}

export default ClassTimer
