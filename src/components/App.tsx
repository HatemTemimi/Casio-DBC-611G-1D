import { useEffect, useState } from "react"
import useInterval from '../hooks/useInterval'
import MainDisplay from "./Digital"
import Casio from "./Casio"


function App() {

  return (
    <div className="flex w-full h-screen bg-black justify-center items-center">
      <Casio></Casio>
    </div>
  )
}

export default App
