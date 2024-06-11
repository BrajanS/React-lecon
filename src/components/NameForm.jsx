import React, { useState } from 'react'

export default function FormV2() {
    const [nom,setNom] = useState('')
    const [hide,setHide] = useState(true)

    function FormWork(){

    }
    function Submitted(e){
      e.preventDefault()
      setNom(e.target.value)
      // !setHide
    }
  
  return (
    <form className='flex flex-col px-1'>
        <input className='input my-2 bg-gray-400' onChange={(e)=> setNom(e.target.value)} placeholder='Enter Name' type="text"/>
        <button className='btn btn-neutral' onSubmit={Submitted}>Click</button>
        {nom !=""&& <p>Bienvenu {nom}!</p>}
    </form>
  )
}
