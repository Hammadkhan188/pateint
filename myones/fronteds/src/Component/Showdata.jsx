import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Showdata() {
    let [user_data,setUserdata]=useState([])

    useEffect(() => {
        datalao()
    }, [])

    async function datalao() {
        try {
            const res = await axios.get("http://localhost:3002/pateint/users")
            console.log(res.data)
            setUserdata(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='container'>
            <h1>User data</h1><hr />
            <div className="row">
                {user_data.length === 0 ? (
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text text-danger">No user found</p>
                        </div>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-primary">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user_data.map((a, id) => (
                                    <tr key={id}>
                                        <td>{a.name}</td>
                                        <td>{a.email}</td>
                                        <td>{a.phone}</td>
                                        <td>{a.address}</td>
                                        <td>{a.gender}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
