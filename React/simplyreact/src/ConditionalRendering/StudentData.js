import React from "react";
import EducationalDetails from "./EducationalDetails";

export default class StudentData extends React.Component{
    constructor(){
        super();
        this.state={flag:false};
    }
    render(){
        return(
            <>
                <p> Name : Allen</p>
                <p> Email : allen@gmail.com</p>
                <p>DOB: 23/2/1313</p>
                <br></br>
                <br></br>
                Show EducationalDetails: <input type="checkbox" 
                    onClick={(e)=>{
                        this.setState({flag:e.target.checked})
                    }}></input>
                <pre>
                Details : {this.state.flag && <EducationalDetails></EducationalDetails>}
                </pre>
            </>
        );
    }
}