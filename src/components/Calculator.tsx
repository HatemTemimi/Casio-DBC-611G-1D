import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'redux/config/hooks'

export default function Calculator() {

  const  a  = useAppSelector(state=>state.moduleReducer.a)

  const  b  = useAppSelector(state=>state.moduleReducer.b)

  const dispatch = useDispatch()

 const  luminous  = useAppSelector(state=>state.moduleReducer.luminous)

  return (
      <div className="flex flex-col justify-center items-center w-full h-72">
        <div className='flex flex-row justify-between w-full px-4 -mt-6'>
            <h1 className='text-4xl font-bold '>=</h1>
            <div className='text-xs'>
                {
                    (luminous) 
                    ? <p>&#9632;		Autolight</p>
                    : <p> &#9633;		Autolight</p>
                } 
                {
                    (1==1)
                    ?  <p>&#9632; 		3 sec</p>
                    : <p>&#9633;		3 sec</p>
                }
                {
                    (1==1)
                    ?  <p>&#9632; 		Mute</p>
                    : <p>&#9633;		Mute</p>
                }
            </div>
        </div>
        <div className='flex flex-row space-x-16 h-24'>
            <h1 className="text-8xl font-bold tracking-tight text-black sm:text-8xl">
              {a}
            </h1>
            <h1 className="text-8xl font-bold tracking-tight text-black sm:text-8xl">
              {b}
            </h1>
        </div>
        <p className="mt-4 text-2xl font-bold text-black">
          calculator
        </p>
      </div>
  )
}
