import React from "react";
export default class HalfString extends React.Component{
    constructor(){
        super();
        this.state={halfstr:""};
    }
    handler=(e)=>{
        let str = e.target.value;
        this.setState({halfstr:str.substring(0,str.length/2)});
    }
    render(){
        return(
            <>
            <div>
                Enter Text: <input type="text" id="val" onBlur={this.handler}></input>
            </div>
            <br></br>
            <p>Result is: {this.state.halfstr}</p>
            </>
        )
    }
}