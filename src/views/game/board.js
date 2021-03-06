import React from 'react';
import Square from './square';
import Character from '../../components/character'

const winJ = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

export default class Board extends React.Component {
  
  constructor() {
    super()
    this.state = this.initialState()
  }
  render() {
    const motto = "you can do it!!!"

    return (
      <div>
        <div className="motto">{motto}</div>
        <div className="status">{this.getStatus()}</div>
        <div className="board-row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="board-row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className="board-row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
        <button onClick={() => console.info(this.setState(this.initialState()))}>reset</button>
      </div>
    )
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} turn={this.state.turn} clickEvent={() => {
      if (!this.state.squares[i] && !this.state.winner) {
        this.state.squares[i] = this.state.turn
        if (this.checkWin(this.state.squares)) this.state.winner = this.checkWin(this.state.squares)
        this.state.turn = (this.state.turn == 'X') ? 'O' : 'X'
        this.setState({squares: this.state.squares, turn: this.state.turn, winner: this.state.winner})
      }
    }}/>
  }
  checkWin(squares) {
    let winner = null
    winJ.forEach((item) => {
      if (squares[item[0]] && squares[item[0]] === squares[item[1]] && squares[item[0]] === squares[item[2]]) {
        winner = squares[item[0]]
      }
    })
    return winner
  }
  initialState() {
    return {
      turn: 'X',
      winner: null,
      squares: Array(9).fill(null)
    }
  }
  getStatus() {
    if (this.state.winner) {
      return <Character value={`Winner is ${this.state.winner}`} />
    } else if (!this.state.squares.includes(null)) {
      return `Game Over`
    } else {
      return `Next player: ${this.state.turn}`
    }
  }
}
