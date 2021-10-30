import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const MyBooks = () => {
    const { user, isLoading } = useAuth();
    const [booking, setBooking] = useState([]);
    const [status, setStatus] = useState();


    useEffect(() => {
        axios.get(`http://localhost:6007/bookings/${user?.email}`)
            .then(res => {
                setBooking(res.data);
            });
    }, [user]);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete ?');
        if (confirm) {
            axios.delete(`http://localhost:6007/bookings/${id}`)
                .then(res => {
                    console.log(res)
                    if (res.data.deletedCount) {
                        alert('Sucessfully deleted your percel booking');
                        const restBookings = booking.filter(book => book._id !== id);
                        setBooking(restBookings);
                    }
                });
        }
    };

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
            <h2 className="text-3xl text-center font-bold mt-7">My Booked Services</h2>
            <div className="container ml-10  mt-10">
                <div className="tables">
                    <table className="table-auto border-collapse border p-5">
                        <thead>
                            <tr>
                                <th className="w-1/2 ...">Name Of Service</th>
                                <th className="w-1/4 ...">User</th>
                                <th className="w-1/4 ...">Weight</th>
                                <th className="w-1/4 ...">Locations</th>
                                <th className="w-1/4 ...">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map(book => <tr key={book._id}>
                                    <td className="border p-2">{book.service}</td>
                                    <td className="border  p-2">{book.email}</td>
                                    <td className="border  p-2">{book.weight}</td>
                                    <td className="border  p-2">{book.departure_loc} to {book.delivery_loc}</td>
                                    <td className="border  p-2">
                                        <button className={book.status == 0 ? 'p-2 rounded bg-yellow-400 text-white' : 'p-2 rounded bg-green-800 text-white'} value="0" onClick={() => {
                                            if (book.status == 0) {
                                                handleStatus(book._id, 1);
                                            } else {
                                                handleStatus(book._id, 0);
                                            }
                                        }}>{book.status == 0 ? 'Pending' : 'Approved'}</button>
                                        <button className="p-2 rounded bg-red-400 text-white ml-2 mt-2" onClick={() => handleDelete(book._id)}>Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooks;