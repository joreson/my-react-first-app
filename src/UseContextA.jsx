
import { useState,createContext } from "react"

import UseContextB from "./UseContextB.jsx"

export const UserContext= createContext();



function UseContextA(){
    const [user,setUser] = useState("Mak")

    return(
    <>
        <div className="box" >
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value= {user}>
                 <UseContextB user={user} />
            </UserContext.Provider>


           

        </div>
    
    </>)

}
export default UseContextA