import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function App() {

  let [response, setResponse] = useState(null)

  useEffect(()=>{
    // async fetch('https://dummyjson.com/products').then(data => await data.json())
    // .then(res => await setResponse(res.products)).catch((err) => console.log(err));

    // let getData = async () => {
    //   try{
    //     const res = await fetch('https://dummyjson.com/products')
    //     const data = await res.json()

    //     setResponse(data.products)
    //   }catch(err){
    //     console.log(err)
    //   }
    // }

    // getData()

    let data = axios.get('https://dummyjson.com/products')
    .then((res) => setResponse(res.data.products))
    .catch((err) => console.error(err))
  }, [])


  if(response!=null){
    console.log(response)
  }

  if (!response) {
    return <h2>Loading...</h2>
  }

  let styles = {
    border: "1px solid black",
    borderRadius: "5px",
    width: "300px",
    margin: "20px",
    padding: "10px",
    display : "inline-block",
  };

  return (
    <div>
      {response && response.map(obj => (
        <div key={obj.id} style={styles}>
          <img src={obj.images[0]} alt=""  width={200}/>
          <h4>{obj.title}</h4>
          <p>{obj.description}</p>

        </div>
      ))}

      <h1>hello</h1>
    </div>
  )
}
