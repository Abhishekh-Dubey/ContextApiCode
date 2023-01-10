import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext';


function CoA() {
    // const [getAbc, setAbc]= useState(true);
    const {state, handlechange}=useContext(AppContext);
    const [buttonState, setButtonState]=useState(false);
    const [isToggle, setIsToggle] = useState(false)
    const toggle=()=>{
      setButtonState(!buttonState);
    }
    
    
  return (
    <div>


<button onClick={()=>{
              toggle();
               setIsToggle(!isToggle)
               handlechange(10)
               }} 
        // className={"toggle--button "+ (buttonState? 'toggle--close':'')}
         >
        {buttonState? 'close':'open'}
        </button>

        <div >
        {isToggle ? <p>login</p>:<p>regstration</p>}
         
         </div>


    {/* <button
    onClick={()=>{
       
    }}
    >submit</button> */}
     
    </div>
  )
}

export default CoA
