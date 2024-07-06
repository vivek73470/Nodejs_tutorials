import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        pass: '',
    })

    const [error, setError] = useState('');
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
            const res = await fetch("http://localhost:5500/user/login", {
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
            localStorage.setItem('token', data.token);
            setFormData({
                name: '',
                email: '',
                pass: '',
            });
        }
        catch (err) {
            console.log(err)
            setError('Invalid credentials. Please try again.');
        }
    }
    return (
        <div>
            <h4>Login</h4>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
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
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login