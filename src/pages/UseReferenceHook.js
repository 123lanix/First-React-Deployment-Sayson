import { useRef, useEffect } from 'react';
import RenderCounter from '../components/RenderCounter';

const UseReferencePage = () => {
    const selectingElements = useRef();
    useEffect(()=>{
        alert("Rendered Something");
    });
    const getvalue = function(){
        alert(selectingElements.current.value);
    }
    const changevalue = function(){
        selectingElements.current.value = "Changed Value";
    }
    const getClass = function(){
        alert(selectingElements.current.value.classList);
    }
    return ( 
        <div>
            <h1>Use Reference Page</h1>
            <input ref={selectingElements} type="text" className="SampleClass BasicClass"/>
            <button onClick={getvalue}>Get value of text</button>
            <button onClick={changevalue}>Change value of text</button>
            <button onClick={getClass}>Get the classlist of text</button>
            <RenderCounter></RenderCounter>
        </div>
     );
}
 
export default UseReferencePage;