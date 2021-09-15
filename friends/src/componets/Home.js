import React, { useState } from 'react'

const Home = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    }
    console.log(values);
    return (
        <div className="home">
            <h1>welcome to the place where<br /> you can meet your friends</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input name={'username'} value={values.username} onChange={handleChange} id="username" />
                <label htmlFor="password" >password:</label>
                <input name={'password'} value={values.password} onChange={handleChange} id="password" />
                <br />
                <button>click to login</button>
            </form>
        </div>
    )
}

export default Home
