import React,{useState} from 'react'
import FruitList from './components/FruitList'
import Author from './components/Author'
import Counter from './components/Counter'

export default function app() {
  //lifting up State
  let [clicked, setClicked] = useState(0);

  let arr = ['apple','mango','orange']
  return (
    <div>
      <FruitList list={arr}  clk = {clicked}/>
      <Author clk={clicked}/>
      <Counter setClk={setClicked} clk={clicked}/>
    </div>
  )
}
