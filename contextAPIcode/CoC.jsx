import React, { useContext } from 'react'
import { AppContext } from './AppContext';
// import { BioData } from './CoA'

function CoC() {
    
    const {state, handlechange}=useContext(AppContext);
    // const context =useContext(BioData)
    // console.log(context)
  return (
    <div>CoC {state}</div>
  )
}

export default CoC