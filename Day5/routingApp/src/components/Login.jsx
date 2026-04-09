import React,{useState} from 'react'
import style from './Login.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
  let[user, setUser] = useState("")
  let[pass, setPass] = useState("")

  let navigate = useNavigate()

  let handleChange = (e)=>{
    let name = e.target.name
    let value = e.target.value
    if(name == 'user'){
      setUser(value)
    }
    if(name == 'password'){
      setPass(value)
    }
    console.log(e.target.name)
  }

  let handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/')
    console.log(`Welcome ${user}, your password is ${pass}`)
  }

  return (
    <>
        <div className={style.login}>
          Login to your Account
          <form className={style.form} onSubmit={handleSubmit}>
            <input type="text" name='user' id={style.user} placeholder='User Name' 
            onChange={handleChange}/>
            <input type="text" name='password' id={style.pass} placeholder='Password' 
            onChange={handleChange}/>
            <button className={style.btn}>Login</button>
            <p className={style.opt}>Don't have an account ? click here</p>
          </form>
        </div>
    </>
  )
}
