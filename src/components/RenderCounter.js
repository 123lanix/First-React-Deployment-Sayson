import { useRef, useState, useEffect } from 'react';
const RenderCounter = () => {
    
    const[value, setValue] = useState("");
    const RenderCount = useRef(0);
    const displayValue = function(e){
        setValue(e.target.value);
    }
    useEffect(()=>{
        RenderCount.current++;
    })
    const selectingElements = useRef();
    const changevalue = function(){
        selectingElements.current.value = "Changed Value";
    }
    return ( 
        <div>
            <input ref={selectingElements} type="text" onChange={displayValue}/>
            <h1>{value}</h1>
            <h3>Render Count: {RenderCount.current}</h3>
            <button onClick={changevalue}>Change value of text</button>
        </div>
     );
}
 
export default RenderCounter;