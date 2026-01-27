import React from 'react'

/*export default function Condition({login}) {
  if(login)
  {
    return (
        <p>Welcome to Login Page</p>
    )
  }else{
    return (
        <p>Please Login First</p>
    )
  }  
}
  */

export default function Condition({login}) {
    return(
        login ? <p>Welcome to Login Page</p>:<p>Please Login First</p>
    ) 
}
