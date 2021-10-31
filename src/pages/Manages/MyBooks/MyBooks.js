import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
import './MyBooks.css';

const MyBooks = () => {
    const { user, isLoading } = useAuth();
    const [booking, setBooking] = useState([]);
    const [status, setStatus] = useState();


    useEffect(() => {
        axios.get(`https://excel-courier.herokuapp.com/bookings/${user?.email}`)
            .then(res => {
                setBooking(res.data);
            });
    }, [status]);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete ?');

        if (confirm) {
            axios.delete(`https://excel-courier.herokuapp.com/bookings/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        const restBookings = booking.filter(book => book._id !== id);
                        setBooking(restBookings);
                    }
                });
        }
    }

    const handleStatus = (id, status) => {
        axios.put(`https://excel-courier.herokuapp.com/bookings/${id}`, {
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
            <div className="container mx-auto mt-10">
                <div className="tables">

                    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 ">
                        <thead className="text-white">
                            {
                                booking.map(book => <tr key={book._id} class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                    <th className="p-3 text-left text-black">User</th>
                                    <th className="p-3 text-left text-black">Service</th>
                                    <th className="p-3 text-left text-black">Location</th>
                                    <th className="p-3 text-left text-black">Weight</th>
                                    <th className="p-3 text-left text-black" width="110px">Actions</th>
                                </tr>)
                            }

                        </thead>
                        <tbody class="flex-1 sm:flex-none">
                            {
                                booking.map(book => <tr key={book._id} class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                    <td className="border-grey-light border hover:bg-gray-100 p-3">{book.email}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{book.service}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{book.departure_loc} to {book.delivery_loc}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{book.weight}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
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