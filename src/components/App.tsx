import { useEffect, useState } from "react"


function App() {

  let [time, setTime] = useState<string>("")

  useEffect(()=>{
    var today: Date 
    setInterval(()=>{
      today = new Date("france")
      setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    }, 1000)
  })

  return (
    <div className="overflow-hidden flex items-center  bg-black min-h-screen w-full">
      <div className="flex flex-col w-full items-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          TimeTeller
        </h1>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
          {time}
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Digital Watch
        </p>
      </div>
    </div>
  )
}

export default App
