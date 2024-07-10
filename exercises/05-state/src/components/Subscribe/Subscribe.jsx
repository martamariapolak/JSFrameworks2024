 import { useState } from "react";
function Subscribe(){
    const[subscribed,setSubscribed]= useState(false);
    return (
    <button onClick={()=>{setSubscribed(true)}}>
        {subscribed?"subscribed":"please subscribe"} </button>

    );   
}
export default Subscribe;