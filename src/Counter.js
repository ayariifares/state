import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
            timer : 0,
            interval : null
    
        }
    }
    //bech nahkiw les methodes lifecycle mttena //
    componentDidMount(){
        //ki yetcharja componenet eli fi west methode edhika il sera executer//
console.log("lecture de component");
this.setState({
    interval:setInterval(
        ()=>this.setState({timer : this.state.timer + 1}),1000

    )
})
    }
    componentDidUpdate(){
        console.log("saret update",this.state.counter)
        //ki nhot + wel - twali tamel update//
    }
    componentWillUnmount(){
        console.log("gteletni")
        //ki component yetsaker ex 404 not found //
    }
incr=()=>{
    this.setState({counter : this.state.counter+1})
}
decr=()=>{
    if(this.state.counter>0){ 
    this.setState({counter : this.state.counter-1})
}
 
}
reset=()=>{
    this.setState({counter : 0})
}
  render() {
    return (
      <div>
<button onClick={()=>{this.incr()}}>+</button>
<button onClick={()=>{this.decr()}}>-</button>
<button onClick={()=>{this.reset()}}>reset</button>
<h1>{this.state.counter}</h1>
<h1>{this.state.timer}</h1>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./ayarii.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Name:fares
        </Card.Text>
        <Card.Text>
         adresse:lac
        </Card.Text>
        <Card.Text>
         age:20
        </Card.Text>
    
    
      </Card.Body>
    </Card>
      </div>
    )
  }
}

