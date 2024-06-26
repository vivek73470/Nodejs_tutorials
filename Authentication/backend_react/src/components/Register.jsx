import React, { useState } from 'react'

function Register() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const[age,setAge]=useState('')

    const handleSubmit =()=>{
        const payload = {
            name,
            email,
            pass,
            age
        }
       fetch("http://localhost:4500/users/register",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-Type":"application/json"
        }
       }).then(res=>res.json())
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
    }
  return (
    <>
    <div>Register</div>
    <input type="text"  placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="email"  placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password"  placeholder='enter password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    <input type="text"  placeholder='enter age' value={age} onChange={(e)=>setAge(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Register