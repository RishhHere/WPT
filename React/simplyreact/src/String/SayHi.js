import { useState } from "react";

export default function SayHi(){
    let[msg,setmsg] = useState("");
    function handler(){
        setmsg("Hey clicker!");
    }
    return(
        <>
        <div>
            <input type="button" value="Click me to SayHI" onClick={handler}></input>
        </div>
        <br>
        </br>
        <p>{msg}</p>
        </>
    );

}