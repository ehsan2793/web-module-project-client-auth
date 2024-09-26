import React, { useEffect, useState } from 'react'
import axios from 'axios'
const LoginPage = () => {
    const [state, setstate] = useState([])
    useEffect(() => {
        getFriends()
    }, [])

    const getFriends = () => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/api/friends', {
            headers: { 'Authorization': token },
        })
            .then(response => {
                console.log(response)
                setstate(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            {state.map(item => (
                <div key={item.id}>
                    <p>
                        <span style={{ margin: '50px' }}> Name: {item.name} </span>
                        <span style={{ margin: '50px' }}>Age: {item.age} </span>
                        <span style={{ margin: '50px' }}> Email: {item.email} </span>

                    </p>
                </div>
            ))}
        </div>
    )
}

export default LoginPage
