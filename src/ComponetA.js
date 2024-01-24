
import React from "react"
import ComponetB from "./ComponetB";
class ComponetA extends React.Component{
    constructor(){
        super();
        this.state={
            name:"ComponetA",
            user:[]
        }
        console.log("constructorA")
    }
    static getDerivedStateFromProps(){
        console.log("componetA derived from props")
        return null;
    }
    componentDidMount(){
        console.log("componetmount A")
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user =>this.setState({user}))

    }
    render(){
        console.log(this.state.user)
        return(
            <>
              <h1>{this.state.name}</h1>
          <ul>
            {this.state.user.map((d)=>{
                return (
                    <li>{d.username}</li>
                )
            })}
          </ul>
            </>
          
        )
    }
}
export default ComponetA;