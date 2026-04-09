import React,{useState, useRef} from 'react'
import style from './Login.module.css'

export default function Signup() {
  let[user, setUser] = useState("")
  let[pass, setPass] = useState("")
  let [login, setLogin] = useState(false)

  let userRef= useRef(null)
  let passRef = useRef(null)


  let handleSubmit = (e)=>{
    e.preventDefault()
    console.log(userRef.current.value)
    setUser(userRef.current.value)
    setPass(passRef.current.value)
    //setLogin(true)
    console.log(`Welcome ${user}, your password is ${pass}`)
  }

  return (
    <>
      {
        !login&&
        <div className={style.login}>
          Register to your Account
          <form className={style.form} onSubmit={handleSubmit}>
            <input type="text" name='user' id={style.user} placeholder='User Name' 
            ref={userRef}/>
            <input type="text" name='password' id={style.pass} placeholder='Password' 
            ref={passRef}/>
            <button className={style.btn}>Login</button>
          </form>
        </div>
      }
      {
        login&&
        <div>
          <h1>
            Welcome {user}, you can go ahead!
          </h1>
        </div>
      }
    </>
  )
}
