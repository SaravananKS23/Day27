import React from "react";
const Modal=(props)=>{
    if(!props.open)
    return null;
    
    return <>
    <div style={{border:'2px solid grey',borderRadius:'10px', background:'lightgrey',width:"600px",padding:'20px',margin:'20px',marginLeft:'30%'}}>
        <div style={{borderBottom:'2px solid red'}}>
            <h4>{props.title}</h4>
        </div>
        <div style={{marginTop:'20px'}}>
            {props.children}
        </div>
    </div>
    </>
}
export default Modal;