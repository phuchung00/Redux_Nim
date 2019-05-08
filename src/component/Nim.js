import React, { Component } from 'react'
import { isS } from 'xmlchars/xml/1.0/ed5';

export default class Nim extends Component {
  state = {
    number: ''
  }
  handleNumberChange = ({ target }) => {
    this.setState({
      number: target.value
    })
  }
  descrease = () => {
    const { number } = this.state
    const n = parseInt(number)
    if (isNaN(n)) return;
    const { descrease, change } = this.props
    descrease(n)
    change()
  }
  dis = () =>{
    const {isStop} = this.props
    if(isStop === true){
      if((this.props.player - 1) % 2 === 0){
        return (<div>Player2 win</div>)
      } return (<div>Player1 win</div>)
    }
  }
  render() {
    const { number } = this.state
    const { counter } = this.props
    const { isChange } = this.props
    return (
      <div>
        <div>{counter || 0}</div>
        <div >
          <p>{isChange? 'Player1':'Player2'}</p>
          <input
            onChange={this.handleNumberChange}
            type="number"
            name="Number"
            value={number}
          ></input>
          <button disabled={this.props.isStop} onClick={this.descrease}>add</button>
        </div>
        {this.dis()}
      </div>
    )
  }
}
