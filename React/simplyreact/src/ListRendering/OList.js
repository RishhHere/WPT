export default function OList(){
    let item = ['comb','oil','bread','datacable'];

    return(
        <>
            <ul>
                {item.map((item)=>{
                    <li key={item}>{item}</li>
                })}
            </ul>
        </>
    );
}