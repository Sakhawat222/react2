import React, { useState } from 'react'


export default function Adcart() {
    const [count, setCount]= useState(0);
    const handleIncrement=()=>{
        if (count<10) {
            setCount(count+1) }   }


    const handledecrement=()=>{
        if (count>0) {
            setCount(count-1) }  }

  return ( <>
    <h1>value is :<b> {count} </b></h1>
   <button onClick={handleIncrement}>add</button>
   <button onClick={handledecrement}>cut</button>
   
   
   
   
   
    </> )}
