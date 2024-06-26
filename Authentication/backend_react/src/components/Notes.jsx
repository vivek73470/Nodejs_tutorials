import React, { useEffect, useState } from 'react'

function AllNote() {

    useEffect(() => {
        fetch("http://localhost:4500/notes", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(res => {
            console.log("Response from server:", res);
            return res.json();
        })
        .then(data => {
            console.log("JSON Parsed Data:", data);
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
    }, []);
    

  return (
    <>
    <div>All notes are in console</div>
 
    </>
  )
}

export default AllNote