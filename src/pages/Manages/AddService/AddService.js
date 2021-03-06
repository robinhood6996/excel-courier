import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://excel-courier.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service added suceccfully');
                    reset();
                }
            })
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-center mt-5 mb-10 text-3xl font-bold">Add New Service</h2>

            <div className="p-4" >

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="border border-2 p-4  w-full  border-gray-900 rounded" placeholder="Title" {...register("title", { required: true })} /> <br />
                    {errors.title && <span className="font-bold text-red-700">This field is required</span>}
                    <br />


                    <textarea placeholder="Short Description" className="border border-2 p-4  w-full mt-2 border-gray-900 rounded" name="" id="" cols="30" rows="5" {...register("short_desc", { required: true })}></textarea><br />
                    {errors.short_desc && <span className="font-bold text-red-700">This field is required</span>}<br />


                    <textarea placeholder="Description" className="border border-2 p-4 w-full mt-2 border-gray-900 rounded" name="" id="" cols="30" rows="7" {...register("description", { required: true })}></textarea><br />
                    {/* errors will return when field validation fails  */}<br />
                    {errors.description && <span className="font-bold text-red-700">This field is required</span>}<br />


                    <input placeholder="Enter Image LInk 1" className="border border-2 p-4  w-full border-gray-900 rounded"  {...register("image1", { required: true })} /><br />
                    {errors.image1 && <span className="font-bold text-red-700">This field is required</span>}<br />


                    <input placeholder="Enter Image LInk 2" className="border border-2 p-4  w-full border-gray-900 rounded mt-2"  {...register("image2")} /><br />

                    <input className="p-4 mt-3 pl-4 bg-yellow-500 text-white font-bold rounded" type="submit" />
                </form>
            </div>
        </div>


    );
};

export default AddService;