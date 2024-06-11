import React from 'react'
import { useState } from 'react'

export default function Compteur() {
    const [count, setCount] = useState(0);
    function plus(){
        setCount(count+1)
    }
    function moins(){
        if(count!=0){setCount(count-1)}
        else return
    }

    // UseEffect(()=> {
    //         console.log(count);
    //         return()=> {
    //             console.log("Last");
    //         };
    //     },[count]
    // )
  return (
    <div>
        <p>Count: {count}</p>
        {/* <button onClick={()=> setCount(count + 1)}>Increase</button> */}
        <button className='btn btn-success mx-3' onClick={plus}>Increment</button>
        <button className='btn btn-success mx-3' onClick={moins}>Decrement</button>
    </div>
  )
}
