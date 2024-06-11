import React from 'react'

export function Liste(props) {
  return (
    <div>IDs:{props.ListI.map((item, index) => (<span key={index}>{item}{index < props.ListI.length - 1 ? '|' : ''}</span>))}
    , <br/>
    Noms: {props.ListName.map((item, index) => (<span key={index}>{item}{index < props.ListI.length - 1 ? '|' : ''}</span>))}
    , <br/>
    Prix: {props.ListPrice.map((item, index) => (<span key={index}>{item}{index < props.ListI.length - 1 ? '€|' : ''}</span>))}€
    </div>
  )
}

export function Values(props){
    return (
        <div className='flex'>
            <div className="w-[50px] items-center gap-1">
                <div className="bg-[#cccccc] flex p-[5px] justify-center border-[1px] border-[solid] border-black">IDs</div><div id='pIds' className="flex-col">{props.ValI.map((item, index) => (<div className="border-[1px] border-[solid] border-black p-2 w-[50px]" key={index}>{item}{index < props.ValI.length}</div>))}</div>
            </div>
            <div className="w-fit items-center gap-1">
                <div className="bg-[#cccccc] flex p-[5px] justify-center border-[1px] border-[solid] border-black">Noms</div><div id='pIds' className="flex-col">{props.ValNom.map((item, index) => (<div className="border-[1px] border-[solid] border-black p-2 w-[100%]" key={index}>{item}{index < props.ValNom.length}</div>))}</div>
            </div>
            <div className="w-[100px] text-[center] items-center gap-1">
                <div className="bg-[#cccccc] flex p-[5px] justify-center border-[1px] border-[solid] border-black">Prix</div><div id='pIds' className="flex-col">{props.ValPrix.map((item, index) => (<div className="border-[1px] border-[solid] border-black p-2 w-[100px]" key={index}>{item}{index < props.ValPrix.length}€</div>))}</div>
            </div>
        </div>
    )
}