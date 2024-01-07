import React from "react";

export default class StringFormat extends React.Component{
    constructor(){
        super();
        this.state={orgstr:"",str:"",rstr:""}
    }

    revHandler=(event)=>{
        let ischeck = event.target.checked;
        if(ischeck){
            let gotstr = this.state.orgstr;
            let rstr = "";
            for(let i=gotstr.length-1;i>=0;i--){
                rstr+=gotstr.charAt(i);
            }
            this.setState({str:rstr,rstr:rstr});
        }
    }

    radhandler=(event)=>{
        let opr = event.target.id;
        let s = "";
        switch(opr){
            case 'uc': 
                s = this.state.str.toUpperCase();
                this.setState({str:s});
                break;
            case 'lc': 
                s = this.state.str.toLowerCase();
                this.setState({str:s});
                break;
            case 'tc': 
                let s1 = this.state.str.charAt(0).toUpperCase()
                let s2 = this.state.str.substring(1).toLowerCase();
                s = s1 +s2;
                this.setState({str:s});
                break;

            default: break;
        }
    }

    render(){
        return(
            <>
            <div>
                Enter input : <input type="text" onBlur={(e)=>{
                    this.setState({orgstr:e.target.value,str:e.target.value})
                }}></input><br></br>
                <br></br>
                Reverse: <input type="checkbox" onClick={this.revHandler}></input>
                <br></br>
                UpperCase: <input type="radio" id="uc" name="change" onClick={this.radhandler}></input>
                <br></br>
                LowerCase: <input type="radio" id="lc" name="change" onClick={this.radhandler}></input>
                <br></br>
                TitleCase: <input type="radio" id="tc" name="change" onClick={this.radhandler}></input>
                <br></br>
                <p> Result : {this.state.str}</p> 
            </div>
            </>
        );
    }
}