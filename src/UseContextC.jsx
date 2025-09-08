import UseContextD from "./UseContextD"
import {UserContext} from "./UseContextA"
import { useContext } from "react"


function UseContextC(){

    const user= useContext(UserContext);
    return(
    <>
        <div className="box" >
            <h1>ComponentC</h1>
            <h2>{`Hi ${user}`}</h2>
            <UseContextD />
        </div>
    
    </>)

}
export default UseContextC