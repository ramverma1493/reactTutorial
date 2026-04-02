import React,{useState} from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'

export default function Hooks() {
    let[time,setTime] = useState(0)
    useEffect(()=>{
        let interval =  setInterval(()=>{
            console.log(time)
            setTime(time+1);
        },1000)
        return ()=>clearInterval(interval)
    },[time])

    let fact = useMemo(()=>{
            let res = 1
            for(let i = 1; i<=time; i++){
                res *= i
            }
            console.log(res);
            return res;
        },[time]
    )
  return (
    <div>
      <h3>Timer:</h3>
      <p>{time}</p>
      <p>{`Factorial of ${time} is ${fact}`}</p>
    </div>
  )
}
