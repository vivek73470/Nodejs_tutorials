import React, { useState } from 'react'

function Note() {
    const [formData, setFormData] = useState({
        title: '',
        note: '',
        category: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:4500/notes/create", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            })
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await res.json()
            console.log(data)
            setFormData({
                title: '',
                note: '',
                category: '',
            });
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <h4>Create note</h4>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="title"
                    placeholder='enter title'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input type="text"
                    name="note"
                    placeholder='enter note'
                    value={formData.note}
                    onChange={handleChange}
                />
                <input type="text"
                    name="category"
                    placeholder='enter category'
                    value={formData.category}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Note