import HalfString from "./HalfString";
import Hello from "./Hello";
import SayHi from "./SayHi";
import StringFormat from "./StringFormat";

export default function App1(){
    return(
        <>
        <StringFormat></StringFormat>
        <HalfString></HalfString>
        <Hello name={"allen"}></Hello>
        <SayHi></SayHi>
        </>
    )
}