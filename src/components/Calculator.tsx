import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'redux/config/hooks'

export default function Calculator() {

  const  a  = useAppSelector(state=>state.moduleReducer.a)

  const  b  = useAppSelector(state=>state.moduleReducer.b)

  const dispatch = useDispatch()

  return (
    <div>
      
      Calculator

      <p>{a}</p>

      <p>{b}</p>
      
      </div>
  )
}
