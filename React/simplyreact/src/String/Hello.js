import React from "react";
import { useState } from "react";
export default class Hello extends React.Component{
    
    render(){
        return(
            <>
            <h1> Hello Print on the browser to {this.props.name}</h1>
            <input type="button" value="click me to say HI" onClick={handler}></input>
            </>
        );
    }
}