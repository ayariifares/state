import React, { Component } from 'react'
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
export class App extends Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  toggle=()=>{
    this.setState({show : !this.state.show})
  }
  render() {
    return (
      <div>
        <button onClick={()=>{this.toggle()}}>show</button>

{this.state.show ? <Counter/> : <h1>click button show</h1> }
      </div>
    )
  }
}

export default App