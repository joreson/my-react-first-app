import React, { useEffect, useState } from "react";

function UseEffect(){
    const [count, setCount]=useState(0);
    const [color,setColor]=useState("green");

    useEffect(()=>{
        document.title= `Count: ${count} ${color}`
    },[count, color]);

    function addCount(){
        setCount(c => c + 1)
    }
    function substractCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green" );
    }

    return(<>

        <p style = {{color : color}}> Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <br />
        <button onClick={substractCount}>Substract</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
    </>)
}

export default UseEffect