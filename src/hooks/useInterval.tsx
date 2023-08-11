import {useEffect, useRef, useState} from 'react'

function useInterval(callback:any, delay:any, limit:any) {
    const [count, setCount] = useState(1)
    const intervalRef = useRef(0)
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback]);

    useEffect(() => {
        console.log(delay, count, limit)
        if ((typeof delay === 'number' && count <= limit) || (typeof delay === 'number' && !limit)) {
            intervalRef.current = window.setInterval(() => {
                setCount(c => c + 1)
                callbackRef.current(count, setCount)
            }, delay)
            return () => {
                window.clearInterval(intervalRef.current)
            }

        }
    }, [delay, count]);

    return intervalRef;
}

export default useInterval