import React, { useEffect, useState } from 'react'

function AllNote() {
    const [Notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes();
    }, [])

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
            let data = res.json()
            console.log("all notes", data)
            setNotes(Notes)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div>All notes are in console</div>

        </>
    )
}

export default AllNote