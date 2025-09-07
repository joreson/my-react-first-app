import { use, useEffect, useState } from "react";

function AreaCalculator(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
         window.addEventListener("resize",handleResize);
         console.log("event listener added");
         return ()=>{
            window.removeEventListener("resize",handleResize)
            console.log("event listener removed");
         }
    },[])

    useEffect (()=>{
        document.title=`${height}px x ${width}px`

    },[width,height])
    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Heigh: {height}px</p>
        
    </>)
}

export default AreaCalculator