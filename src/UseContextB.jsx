import UseContextC from "./UseContextC"
import { UserContext } from "./UseContextA"
import { useContext } from "react"


function UseContextB(){
    const user= useContext(UserContext)
    return(
    <>
        <div className="box" >
            <h1>ComponentB</h1>
            <h2>Wazzup {user}</h2>
            <UseContextC />
            
        </div>
    
    </>)

}
export default UseContextB