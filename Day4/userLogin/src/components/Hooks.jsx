import React,{useState} from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'

export default function Hooks() {
    let[time,setTime] = useState(0)
    useEffect(()=>{
        let interval =  setInterval(()=>{
            //console.log(time)
            setTime(time+1);
        },1000)
        return ()=>clearInterval(interval)
    },[time])

    let [n, setN] = useState(5);

    let fact = useMemo(()=>{
            let res = 1
            for(let i = 1; i<=n; i++){
                res *= i
            }
            //console.log(res);
            return res;
        },[n]
    )
  return (
    <div>
      <h3>Timer:</h3>
      <p>{time}</p>
      <p>{`Factorial of ${n} is ${fact}`}</p>
    </div>
  )
}
