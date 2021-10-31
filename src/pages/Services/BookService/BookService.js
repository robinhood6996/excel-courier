
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useFirebase from '../../../Hooks/useFirebase';
import Swal from 'sweetalert2';

const BookService = () => {



    //get id from parameter
    const { id } = useParams();
    //setService state
    const [service, setService] = useState({});
    const [isServiceLoading, setIsServiceLoading] = useState(true);
    //get user from auth
    const { user, isLoading } = useFirebase();
    // //Input fields state
    // const [name, setName] = useState('');
    //fetch singledata from serer by api
    useEffect(() => {
        setIsServiceLoading(true);
        axios.get(`https://excel-courier.herokuapp.com/services/${id}`)
            .then(res => setService(res.data))
            .catch(error => console.log(error))
            .finally(setIsServiceLoading(false));
    }, [])

    //react hook form 

    const defaultValues = {
        name: user.displayName,
        email: user.email,
        service_title: service?.title

    }

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://excel-courier.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Your Booking is submitted, Wait for our Confirmation',
                        'success'
                    );
                    reset();
                }

            })


    };

    if (isLoading) {
        return <><h2>Loading</h2></>;
    }

    return (
        <div className="container mx-auto">
            <h2 className="sm:text-xl lg:text-4xl font-bold m-5 text-center border-2 border-yellow-500 p-4">Book Our {service?.title} Service</h2>
            <div className="service grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="service-img p-2 p-4">
                    <img className="rounded" src={service?.image2} alt="" />
                    <img className="rounded ml-auto mr-auto mt-5" src={service?.image1} alt="" />
                </div>
                <div className="service-details p-4">
                    <h2 className="text-2xl font-semibold text-yellow-500">{service?.title}</h2>
                    <p className="mt-2 text-medium font-normal">{service?.short_desc}</p>

                    <p className="mt-4 text-medium font-semibold">{service?.description}</p>
                    <a href="#bookform"> <button className="p-4 bg-yellow-500 text-black mt-7 rounded font-bold">Book {service?.title} From Below<FontAwesomeIcon className="ml-2" icon={faArrowDown} /></button></a>
                </div>
            </div>


            <div className="booking-form-area mt-10 mb-10">
                <h2 className="sm:text-xl lg:text-4xl font-bold m-5 text-center p-4">Book {service?.title}</h2>
                <form onSubmit={handleSubmit(onSubmit)} id="bookform">
                    {/* register your input into the hook by invoking the "register" function */}
                    <input defaultValue={defaultValues.name} className=" bg-gray-200 p-4 d-block w-full  border-gray-400 rounded" {...register("name")} /> <br />

                    <br />

                    <input defaultValue={defaultValues.email} className=" bg-gray-200 p-4 d-block w-full border-gray-400 rounded"  {...register("email")} /><br />


                    <input placeholder="Enter Service Name" className=" bg-gray-200 p-4 d-block w-full border-gray-400 rounded mt-2"  {...register("service", { required: true })} /><br />

                    <input placeholder="Estimated Weight Ex: 2kg" className=" bg-gray-200 p-4 d-block w-2/4 border-gray-400 rounded mt-2"  {...register("weight", { required: true })} />

                    <input placeholder="Quantity" className=" bg-gray-200 p-4 d-block w-2/4 border-gray-400 rounded mt-2"  {...register("quantity", { required: true })} /><br />

                    <input placeholder="Type Of Percel/Document" className=" bg-gray-200 p-4 d-block w-full border-gray-400 rounded mt-2"  {...register("type", { required: true })} /><br />

                    <textarea placeholder="Additional Information" className=" bg-gray-200 p-4 d-block w-full border-gray-400 rounded mt-2"  {...register("additional_info")}></textarea><br />

                    <input placeholder="Departure Location" className=" bg-gray-200 p-4 d-block w-2/4 border-gray-400 rounded mt-2"  {...register("departure_loc", { required: true })} />

                    <input placeholder="Delivery Location" className=" bg-gray-200 p-4 d-block w-2/4 border-gray-400 rounded mt-2"  {...register("delivery_loc", { required: true })} /><br />

                    <label htmlFor="" className="font-semibold">Date Of Pickup</label>
                    <input type="date" className=" bg-gray-200 p-4 d-block w-full border-gray-400 rounded mt-2"  {...register("date", { required: true })} /><br />
                    <input type="hidden" defaultValue="0" className=" bg-gray-200 p-4 d-block w-full border-gray-400 rounded mt-2"  {...register("status")} /><br />

                    <input className="p-4 mt-3 px-4 w-full cursor-pointer bg-yellow-500 text-black font-bold rounded text-center ml-auto" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default BookService;