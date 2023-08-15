import React from 'react'

interface ButtonProps {
    isOps: boolean
    value: number | string
    onClick: (e:any)=>void | null
}

export default function Button(props: ButtonProps) {
  return (
     <button value={props.value}
     className="bg-black  hover:border-yellow-700 hover:bg-yellow-400 hover:text-black text-white
     font-bold py-2 px-4 border-b-8 border-yellow-400 hover:yellow -blue-500"
     onClick={props.onClick}>
      {props.value}
    </button>
  )
}
