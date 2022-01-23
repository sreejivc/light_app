import React, { useState } from "react";
import './Bulb.css'
import Button from "./Button";
const Bulb=(props)=>{
const [orange,setOrange]=useState('orangebulb')
const colorChange=(myval)=>{
    setOrange(myval)
}


    return(

        <>
       
        <div className={orange}></div>
        <Button setParentData={colorChange}/>
        
        </>
    )
}

export default Bulb
