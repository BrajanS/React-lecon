import React, { useState } from 'react'

export default function Form() {
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')

    function updateE(e){
        console.log(e.target.value);
        setNom(e.target.value)
    }
    function submit(e){
        e.preventDefault()
    }

  return (
    <form onSubmit={submit} className='p-5 my-6 bg-green-300 flex flex-col gap-5'>
        <input className='input' placeholder='Nom' onChange={updateE} type="text" />
        <input className='input' placeholder='Prenom' onChange={(e)=> setPrenom(e.target.value)} type="text" />
        <button className='btn btn-primary'>Soumettre</button>
        {nom !== "" || prenom !== "" && <p className='text-3xl text-white'>{nom} + {prenom}</p>}
    </form>
  )
}
