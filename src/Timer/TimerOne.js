
import React from "react"
import App from "../App"
class TimerOne extends React.Component{
    constructor(){
        super();
        this.state={
            time:0
        }
        this.timer=null

        console.log("TimerOne constucter")
    }
    static getDerivedStateFromProps(){
        console.log("Timerone getderived from props")
        return null
    }
    shouldComponentUpdate(nextState,nextProps){
        return true
    }
  
    render(){
        console.log("Timer one render")
        return (
            <>
        <h1>Time Spent : {new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
            
        </>
        )
    }
    componentDidMount(){
        console.log("_________________________________")

    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Timer getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(prevProps,prevState,snapshot){

        console.log("_________________________________")
        console.log("TimerOne componetDidUpdate")

        if(prevProps.timerOn !== this.props.timerOn){
            if(this.props.timerOn){
                this.timer=setInterval(() => {
                    this.setState((prevState)=>
                        ({time:prevState.time+1}) 
                    )
                }, 1000);
            
        }
        else{
            clearInterval(this.timer)
        }
        }
       
    }
    componentWillUnmount(){
        console.log("Timer willUnmount")
    }
}
export default TimerOne;