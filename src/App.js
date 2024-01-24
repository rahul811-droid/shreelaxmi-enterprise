import React from "react"
import ComponetA from "./ComponetA"
import ComponetB from "./ComponetB"
import TimerOne from "../src/Timer/TimerOne"
class App extends React.Component{
  constructor(){
    super();
    this.state={
      timerOn:false
    }
  }
  handleTimeOn=()=>{
    this.setState((prevState)=>({timerOn:prevState.timerOn}))
  }
  render(){
    return(
      <>
      <TimerOne timerOn={this.state.timerOn}/>
      <button onClick={this.handleTimeOn}>{this.state.timerOn?"Stop":"Start"}</button>

      </>
    )
  }
}

export default App;
