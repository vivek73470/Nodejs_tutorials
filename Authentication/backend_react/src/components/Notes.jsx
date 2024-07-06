import React, { useEffect, useState } from 'react'

function AllNote() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes();
    },[])

    const fetchNotes = async () => {
        try {
            const res = await fetch("http://localhost:4500/notes", {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            let data =await res.json()
            console.log("all notes", data)
            setNotes(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
     <>
     <h3>All notes</h3>
     <div>
        {notes.length>0 && notes.map((elem)=>(
             <div key={elem._id}>
              <p>{elem.title}</p>
              <p>{elem.note}</p>
              <p>{elem.category}</p>
            </div>
        ))}
     </div>
     </>
    
    )
}

export default AllNote