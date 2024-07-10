
function lessText(text,maxLength){
return (
    <div>
    <button  on click={()=>if(maxLength>10){text}}>read more</button>
    <button on click={()=>if(maxLength<10)!{text}}>read less</button>
</div>
);
}
export default lessText