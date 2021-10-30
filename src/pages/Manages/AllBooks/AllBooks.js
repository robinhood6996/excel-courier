import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import useFirebase from '../../../Hooks/useFirebase';

const AllBooks = memo(() => {
    const [bookings, setBookings] = useState([]);
    const [status, setStatus] = useState();
    useEffect(() => {
        axios.get(`http://localhost:6007/bookings`)
            .then(res => setBookings(res.data))
    }, [status]);

    //Booking delete api
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete ?');
        if (confirm) {
            axios.delete(`http://localhost:6007/bookings/${id}`)
                .then(res => {
                    console.log(res)
                    if (res.data.deletedCount) {
                        alert('Sucessfully deleted your percel booking');
                        const restBookings = bookings.filter(book => book._id !== id);
                        setBookings(restBookings);
                    }
                });
        }
    }

    //Booking status change api
    const handleStatus = (id, status) => {
        axios.put(`http://localhost:6007/bookings/${id}`, {
            status: status
        })
            .then(res => {
                if (res.data.matchedCount) {
                    setStatus(status);
                }

            })
    }
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-7">All Booked Services</h2>
            <div className="container ml-10  mt-10">
                <div className="tables">
                    <table className="table-auto border-collapse border p-5">
                        <thead>
                            <tr>
                                <th className="border w-1/2 ...">Name Of Service</th>
                                <th className="border w-1/4 ...">User</th>
                                <th className="border w-1/4 ...">Weight</th>
                                <th className="border w-2/4 ...">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <tr key={booking._id}>
                                    <td className="border  p-2">{booking.service}</td>
                                    <td className="border  p-2">{booking.email}</td>
                                    <td className="border  p-2">{booking.weight}</td>
                                    <td className="border  p-2">
                                        {/* " p-2 rounded bg-yellow-400 text-white" */}
                                        <button className={booking.status == 0 ? 'p-2 rounded bg-yellow-400 text-white' : 'p-2 rounded bg-green-800 text-white'} value="0" onClick={() => {
                                            if (booking.status == 0) {
                                                handleStatus(booking._id, 1);
                                            } else {
                                                handleStatus(booking._id, 0);
                                            }
                                        }}>{booking.status == 0 ? 'Pending' : 'Approved'}</button>
                                        <button className="p-2 rounded bg-red-800 text-white ml-2 mt-2" onClick={() => handleDelete(booking._id)}>Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
});

export default AllBooks;