import { useState } from "react";

export default function ShowMonth(){
    let[month,setmonth] = useState("select a number");
    function mhandler(event){
        let op = event.target.value;
        switch(op){
            case '1': setmonth("January"); break;
            case '2': setmonth("February"); break;
            case '3': setmonth("March"); break;
            case '4': setmonth("April");break;
            case '5': setmonth("May"); break;
        }
    }
    return(
        <>
        <div>
            Enter the number:<input type="number"></input>
            Select any nnumber: <select onChange={mhandler}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
        <p>
            Select number month name is : {month};
        </p>
        </>
    );
}