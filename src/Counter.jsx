import React, {useState} from "react"


function Counter(){
    const[count, setCount]= useState(0);

    const increment =()=>{
       setCount(c => c + 1) // updater function by using a arrow function
       
       
    }

     const decrement =()=>{
      if(count != 0){
        setCount(c => c - 1) 
      }
      else{
        console.log("number is zero")
      }
       
    }

     const reset =()=>{
       setCount(0) 
    }


    return(<>
            <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>

            </div>

    
    </>)




}
export default Counter