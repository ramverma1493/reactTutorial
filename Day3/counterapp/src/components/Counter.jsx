import React,{useState} from 'react'

export default function Counter({setClk, clk}) {
  //let count = 0;
  let [count,setCount] = useState(0)
  function countMe(){
    setCount(count+1);
    setClk(clk+2)
    console.log(count);
  }
  return (
    <div className='author'>
      <p>Count: {count}</p>
      <button onClick={countMe}>click</button>
    </div>
  )
}
