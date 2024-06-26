import React, { useState } from 'react'

function Login() {
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')

    const handleSubmit =()=>{
        const payload = {
            email,
            pass,
       
        }
       fetch("http://localhost:4500/users/login",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-Type":"application/json"
        }
       }).then(res=>res.json())
       .then(res=>{
        console.log(res)
       localStorage.setItem("token",res.token)
       }
    )
       .catch(err=>console.log(err))
    }
  return (
    <>
    <div>Login</div>
    <input type="email"  placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password"  placeholder='enter password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login