import React, { useState } from 'react'
import DigitalScreen from './Digital'
import { useAppSelector, useAppDispatch } from '../redux/config/hooks'
import { setCalculatorParams, switchLight, switchMode } from 'redux/module'
import useSound from 'use-sound';
import beep from '../public/sounds/beep.mp3'

export default function Casio() {

  let buttons: string[] = ["0","1","2"
                          ,"3","4","5",
                           "6","7","8",
                           "9","=","C"]

  const  luminous  = useAppSelector(state=>state.moduleReducer.luminous)

  const  a  = useAppSelector(state=>state.moduleReducer.a)

  const  b  = useAppSelector(state=>state.moduleReducer.b)

  const dispatch = useAppDispatch()

  const [play] = useSound(beep, {playbackRate: 0.9});


  let calcButtons = buttons.map((element, key)=>{
    return <button key={key} value={element}
     className="bg-black  hover:border-yellow-700 hover:bg-yellow-400 hover:text-black text-white
     font-bold py-2 px-4 border-b-8 border-yellow-400 hover:yellow -blue-500"
     onClick={(e)=>{
        play()
        dispatch(setCalculatorParams(e.target.value))
     }}>
      {element}
    </button>
  })

  return (
      <div className='bg-white w-2/4 h-3/4 rounded'>
        <div className='flex flex-col divide-y-8 divide-yellow-600 w-full h-full'>
          <div className='w-auto h-1/2 rounded-md border-8 border-yellow-400'>
            <div className='bg-black flex flex-row h-full w-full p-4 space-x-4'>
              <div className='text-yellow-400 flex flex-col justify-evenly'> 
                <button className='rotate-90'>{"►Adjust"}</button>
                <button onClick={()=>dispatch(switchMode())} className='-rotate-90'>{"►Mode"}</button>
               </div>
              <div className='h-full w-full flex-col'>
                <div className='flex flex-row justify-between'>
                  <p className='text-yellow-400 font-bold text-2xl'>CASIO</p>
                  <p className='text-white font-extrabold mt-2'>{"<ILLUMINATOR>"}</p>
                </div>
                <div className={(luminous ? 'bg-sky-400':'bg-yellow-400')+" h-4/5 w-full flex justify-center items-center"}>
                  <DigitalScreen></DigitalScreen>
                </div>
                <div className='text-sky-400 font-bold flex flex-row justify-evenly mt-2'>
                  <p>Multilingual</p>
                  <p>Databank</p>
                </div>
              </div>
              <div className='text-yellow-400 flex flex-col justify-evenly'> 
                <button className='rotate-90'>{"►AC"}</button>
                <button onClick={()=>dispatch(switchLight())} className='-rotate-90'>{"►Light"}</button>
               </div>
            </div>
          </div>
          <div className='bg-yellow-300 w-auto h-2/3 p-2'>
            <div className='bg-black w-auto h-full p-2 rounded-md'>
              <div className='bg-yellow-400 w-auto h-full p-2'>
                <div className='bg-black w-auto h-full grid grid-cols-4 divide-x-2 divide-yellow-400'>
                  {calcButtons}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
