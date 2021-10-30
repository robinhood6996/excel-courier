import React from 'react';
import './Blogs.css';
import blog1 from '../../images/blogs/05.jpg';
import blog2 from '../../images/blogs/07.jpg';
import blog3 from '../../images/blogs/12.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUser } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    return (
        <div className="">
            <div className="container mx-auto mt-4">
                <h2 className="text-2xl text-center font-semibold service-txt">Blogs</h2>
                <h2 className="text-5xl text-center font-bold">Read Our <span className="text-yellow-500">Blogs</span> </h2>
            </div>

            <div className=" container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-5 m-5">

                <div className=" border-2 p-4 ">
                    <div className=" border-2 bg-gray-200 rounded p-4">
                        <img className="ml-auto mr-auto rounded" src={blog1} alt="" />
                    </div>
                    <div className=" mt-5">
                        <div className="date-details flex flex-wrap  space-x-20 ml-2">
                            <div className="date flex gap-5 text-lg">
                                <FontAwesomeIcon className="text-lg text-yellow-500" icon={faCalendarCheck} />
                                <h4 className="text-gray-500">25 May, 2021</h4>
                            </div>
                            <div className="date flex gap-5 text-lg">
                                <FontAwesomeIcon className="text-lg text-yellow-500" icon={faUser} />
                                <h4 className="text-gray-500">Admin</h4>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold p-2">India’s Largest Warehouse By Cargoton: Fast growing brand</h2>

                        <button className="bg-yellow-500 text-black font-bold p-2 rounded" >Read More</button>
                    </div>
                </div>

                <div className=" border-2 p-4 ">
                    <div className=" border-2 bg-gray-200 rounded p-4">
                        <img className="ml-auto mr-auto rounded" src={blog3} alt="" />
                    </div>
                    <div className=" mt-5">
                        <div className="date-details flex flex-wrap  space-x-20 ml-2">
                            <div className="date flex gap-5 text-lg">
                                <FontAwesomeIcon className="text-lg text-yellow-500" icon={faCalendarCheck} />
                                <h4 className="text-gray-500">25 May, 2021</h4>
                            </div>
                            <div className="date flex gap-5 text-lg">
                                <FontAwesomeIcon className="text-lg text-yellow-500" icon={faUser} />
                                <h4 className="text-gray-500">Admin</h4>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold p-2">India’s Largest Warehouse By Cargoton: Fast growing brand</h2>

                        <button className="bg-yellow-500 text-black font-bold p-2 rounded" >Read More</button>
                    </div>
                </div>
                <div className=" border-2 p-4 ">
                    <div className=" border-2 bg-gray-200 rounded p-4">
                        <img className="ml-auto mr-auto rounded" src={blog2} alt="" />
                    </div>
                    <div className=" mt-5">
                        <div className="date-details flex flex-wrap  space-x-20 ml-2">
                            <div className="date flex gap-5 text-lg">
                                <FontAwesomeIcon className="text-lg text-yellow-500" icon={faCalendarCheck} />
                                <h4 className="text-gray-500">25 May, 2021</h4>
                            </div>
                            <div className="date flex gap-5 text-lg">
                                <FontAwesomeIcon className="text-lg text-yellow-500" icon={faUser} />
                                <h4 className="text-gray-500">Admin</h4>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold p-2">India’s Largest Warehouse By Cargoton: Fast growing brand</h2>

                        <button className="bg-yellow-500 text-black font-bold p-2 rounded" >Read More</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;