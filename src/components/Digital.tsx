import {useState, useEffect} from 'react'
import useInterval from '../hooks/useInterval'

const DigitalScreen = () => {

  let today: Date = new Date()

  let [seconds, setSeconds] = useState<number>(0)

  let [minutes, setMinutes] = useState<number>(0)

  let [hours, setHours] = useState<number>(0)

  let [date, setDate] = useState<string>("")

  let [timeZone, setTimeZone] = useState<string>("")


  let [luminous, setLuminous] = useState<boolean>(false)


  const init = ()=>{

    setSeconds(today.getSeconds())

    setMinutes(today.getMinutes())

    setHours(today.getHours())

    setDate(today.toDateString())

    if (today.getTimezoneOffset()===-60){
      setTimeZone("UTC+1")
    }

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

  return(
      <div className="flex flex-col justify-center items-center w-full min-h-screen h-full">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-8xl">
          {hours}:{minutes}:{seconds}
        </h1>
        <p className="mt-4 text-xl text-black">
          {date}
        </p>
        <p className="mt-4 text-xl text-black-400">
          {timeZone}
        </p>
      </div>
  )

}

export default DigitalScreen;