import React, { useState } from 'react'
import axios from 'axios'
const Home = (props) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [error, setError] = useState('')


    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    }

    const handleLogin = (event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/api/login', values)
            .then(response => {
                localStorage.setItem('token', response.data.payload)
                props.history.push('/login')
            })
            .catch(error => {
                setError("wrong username or password")
            })

    }

    return (
        <div className="home">
            <h1>welcome to the place where<br /> you can meet your friends</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input name={'username'} value={values.username} onChange={handleChange} id="username" />
                <label htmlFor="password" >password:</label>
                <input name={'password'} value={values.password} onChange={handleChange} id="password" />
                <br />
                <button>click to login</button>
            </form>

            {error.length > 0 ? <p style={{ color: 'red' }}>{error}</p> : null}
        </div>
    )
}

export default Home
