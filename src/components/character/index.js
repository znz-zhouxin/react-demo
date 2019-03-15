import React from 'react'

export default class Character extends React.Component {
  constructor(props) {
    super()
    this.state = {
      color: null
    }
  }

  componentWillMount() {
    const colors = ['red', 'black', 'yellow', 'blue', 'pink', 'purple', 'orange']
    this.timer = setInterval(() => {
      this.setState({
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }, 300)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <span style={{color: this.state.color}}>{this.props.value}</span>
    )
  }
}
