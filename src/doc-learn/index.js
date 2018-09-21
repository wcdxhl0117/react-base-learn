import React, { Component } from 'react';
import './style.js';
import {
	Wrapper
} from './style';

{/* 方格组件 */}
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick({value: 'X'})}>
        {this.props.value}
      </button>
    );
  }
}
{/* 棋盘组件 */}
class Board extends React.Component {
	constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  renderSquare(i) {
    return <Square
			value={this.state.squares[i]}
			onClick={() => this.handleClick(i)}
		/>;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
{/* 游戏组件 */}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


{/* 渲染组件 */}
class doc extends Component {
	constructor(props) {
	  super(props);
		this.state = {
			name: 'wangchao'
		}
	}

  render() {
    return (
			<Wrapper>
				{/* 掩护 */}
				<img src={require("./1.png")} alt="" />

				{/* doc学习：井字棋游戏编写 */}
				<div className="game">
	        <div className="game-board">
	          <Board />
	        </div>
	        <div className="game-info">
	          <div></div>
	          <ol></ol>
	        </div>
	      </div>



			</Wrapper>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default doc;
