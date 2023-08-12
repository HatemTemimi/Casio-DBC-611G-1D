import { useAppSelector } from 'redux/config/hooks'
import Clock from './Clock'
import Calculator from './Calculator'

const DigitalScreen = () => {

  const  mode:string  = useAppSelector(state => state.moduleReducer.mode)

  if (mode=='watch'){ 
    return( <Clock></Clock> )
  } else {
    return (
      <Calculator></Calculator>
    )
  }
}

export default DigitalScreen;