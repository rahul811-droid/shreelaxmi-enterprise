
import React from "react"

class ComponetB extends React.Component{
    constructor(){
        super();
        this.state={
            name:"ComponetB",
           
        }
        console.log("constructorB")
    }
    static getDerivedStateFromProps(){
        console.log("componetB derived from props")
        return null;
    }
    componentDidMount(){
        console.log("componetmount B")
    }
    render(){
        console.log("render componetB")
        return(

            <h1>Hello!ComponetB</h1>
        )
    }
}
export default ComponetB;