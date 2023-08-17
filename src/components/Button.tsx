import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'redux/config/hooks'
import { setCalculatorOperation, setCalculatorParams } from 'redux/module'

interface ButtonProps {
    isNumber: boolean
    value: number | string
}

export default function Button(props: ButtonProps) {
  const setParams = (e: any)=>{
    dispatch(setCalculatorParams(e.target.value))
  }

  const setOps = (e: any)=>{
    dispatch(setCalculatorOperation(e.target.value))
  }

  const  operation  = useAppSelector(state=>state.moduleReducer.operation)

  const  luminous  = useAppSelector(state=>state.moduleReducer.luminous)

  const dispatch = useDispatch()

  return (
     <button value={props.value}
     className="bg-black  hover:border-yellow-700 hover:bg-yellow-400 hover:text-black text-white
     font-bold py-2 px-4 border-b-8 border-yellow-400 hover:yellow -blue-500"
     onClick={props.isNumber ? (e)=>setParams(e) : (e)=>setOps(e) }>
      {props.value}
      {props.isNumber}
    </button>
  )
}
