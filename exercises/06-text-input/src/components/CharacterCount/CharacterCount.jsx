import {useState}from "react";
function CharacterCount(){
    const [characterCount ,setCharacterCount]= useState(0);
    return (
      <>
    <input
    type="text"
    id="input"
    
    onChange={(e)=>setCharacterCount (e.target.value.length)}
    />
  <label >{characterCount}</label>
</>
    )
}
export default CharacterCount;