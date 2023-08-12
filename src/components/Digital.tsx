import {useState, useEffect} from 'react'
import useInterval from '../hooks/useInterval'
import { useAppDispatch, useAppSelector } from 'redux/config/hooks'
import Clock from './Clock'

const DigitalScreen = () => {

  const  mode:string  = useAppSelector(state => state.moduleReducer.mode)

  const dispatch = useAppDispatch()

  if (mode=='watch'){ 
    return( <Clock></Clock> )
  } else {
    return ( <div className='w-full min-h-screen h-full flex items-center justify-center'>calculator</div>)
  }
}

export default DigitalScreen;