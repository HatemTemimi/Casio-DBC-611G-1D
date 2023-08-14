import React, { useState, useEffect } from 'react'
import useInterval from 'hooks/useInterval'
import { useAppSelector } from 'redux/config/hooks'

export default function Clock() {

  let today: Date = new Date()

 const  luminous  = useAppSelector(state=>state.moduleReducer.luminous)

  let [seconds, setSeconds] = useState<number>(0)

  let [minutes, setMinutes] = useState<number>(0)

  let [hours, setHours] = useState<number>(0)

  let [date, setDate] = useState<string>("")

  const init = ()=>{

    setSeconds(today.getSeconds())

    setMinutes(today.getMinutes())

    setHours(today.getHours())

    setDate(today.toDateString().slice(3))


  }

  const incrementSeconds = ()=>{
    setSeconds(prev => prev+1)
  }

  const incrementMinutes = ()=>{
    setSeconds(0)
    setMinutes(prev=>prev+1)
  }

  const incrementHours = ()=>{
    setSeconds(0)
    setMinutes(0)
    setHours(prev=>prev+1)
  }

  const tick = () =>{
    if (seconds!==60){
      incrementSeconds()
    } else {
      if (minutes!==60){
      incrementMinutes()
      } else {
        incrementHours()
      }
    }
  }

  useEffect(()=>{
    init()
  },[])

  useInterval(()=>{
      tick()
  }, 1000, null)


  return (
      <div className="flex flex-col justify-center items-center w-full h-72">
        <div className='flex flex-row justify-between w-full px-4 -mt-6'>
            <h1 className='text-4xl font-bold '>{date.substring(0,4)}</h1>
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
        <div className='flex flex-row space-x-16'>
            <h1 className="text-8xl font-bold tracking-tight text-black sm:text-8xl">
                {hours}:{minutes}
            </h1>
            <h1 className="text-8xl font-bold tracking-tight text-black sm:text-8xl">
                {seconds}
            </h1>
        </div>
        <p className="mt-4 text-2xl font-bold text-black">
          {date}
        </p>
      </div>
  )
}
