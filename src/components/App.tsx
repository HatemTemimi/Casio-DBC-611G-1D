import { useEffect, useState } from "react"


function App() {

  let [seconds, setSeconds] = useState<number>(0)

  let [minutes, setMinutes] = useState<number>(0)

  let [hours, setHours] = useState<number>(0)

  var today: Date = new Date()

  const init = ()=>{
    setSeconds(today.getSeconds())
  }

  const incrementSeconds = ()=>{
    setSeconds(prev => prev+1)
  }

  const incrementMinutes = ()=>{
    setSeconds(0)
    setMinutes(prev=>prev+1)
  }

  const tick = () =>{
    if (seconds!==60){
      console.log("seconds below 60")
      console.log("seconds:",seconds)
      incrementSeconds()
    } else {
      console.log("Resetting..")
      console.log("seconds:",seconds)
      incrementMinutes()
    }
  }

  useEffect(()=>{
    init()
    setInterval(()=>tick(),1000)

  },[])




  return (
    <div className="overflow-hidden flex items-center  bg-black min-h-screen w-full">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          TimeTeller
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
          0:{minutes}:{seconds}
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Current Offset: 0
        </p>
        <p className="mt-4 text-xl text-gray-400">
          Digital Watch
        </p>
      </div>
    </div>
  )
}

export default App
