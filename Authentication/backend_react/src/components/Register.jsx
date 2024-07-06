import React, { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    age: '',
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
        const res = await fetch("http://localhost:4500/users/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await res.json()
        console.log(data)
        setFormData({
            name: '',
            email: '',
            pass: '',
            age: '',
        });
    }
    catch (err) {
        console.log(err)
    }
}
    return (
      <div>
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
              <input type="text"
                  name="name"
                  placeholder='enter name'
                  value={formData.name}
                  onChange={handleChange}
              />
              <input type="email"
                  name="email"
                  placeholder='enter email'
                  value={formData.email}
                  onChange={handleChange}
              />
              <input type="password"
                  name="pass"
                  placeholder='enter password'
                  value={formData.pass}
                  onChange={handleChange}
              />
              <input type="text"
                  name="age"
                  placeholder='enter age'
                  value={formData.age}
                  onChange={handleChange}
              />
              <input type="submit" />
          </form>
      </div>
  )
}

export default Register