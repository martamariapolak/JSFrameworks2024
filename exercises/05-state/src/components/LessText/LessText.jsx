import {useState} from "react";
function LessText(props){
    const[readMore,setReadMore]= useState(false);
    const showMoreText=()=>setReadMore(true);
    
    return (
    <div>
     {readMore?props.text:props.text.substring(0,props.maxLength)}
console.log(readMore);
     
     <div>
        <button className="btn btn-secondary" onClick={showMoreText}>Read more</button>
        <button className="btn btn-secondary" onClick={()=>setReadMore(false)}>Read less</button>
    </div>
    </div>
    ) ;  
}

export default LessText;