import React, { useState } from 'react'

function Note() {
    const[title,setTitle]=useState('')
    const[note,setNote]=useState('')
    const[category,setCategory]=useState('')


    const handleSubmit =()=>{
        const payload = {
            title,
            note,
            category
        }
       fetch("http://localhost:4500/notes/create",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-Type":"application/json",
            "Authorization":localStorage.getItem("token")
        }
       }).then(res=>res.json())
       .then(res=>console.log(res))
       .catch(err=>console.log(err))
    }
  return (
    <>
    <div>Register</div>
    <input type="text"  placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="email"  placeholder='enter note' value={note} onChange={(e)=>setNote(e.target.value)}/>
    <input type="password"  placeholder='enter category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Note