import React, { useState } from "react";
import './Bulb.css'
const Button=(props)=>{
const [caption,setCaption]=useState('OFF')

const toggleMe=()=>{
    if(caption==='ON')
    setCaption('OFF') 
    else{
        setCaption('ON')
    }
}

const setParentData=()=>{
    toggleMe()
    if(caption==='ON'){
        props.setParentData('orangebulb')
    }

    else{
        props.setParentData('greybulb')
    }
    
}
    return(
        <>
        
        <button  onClick={setParentData}>{caption}</button>
        </>
    )
}

export default Button
