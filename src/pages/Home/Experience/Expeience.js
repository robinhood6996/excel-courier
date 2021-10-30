import React from 'react';
import './Experience.css';


const Expeience = () => {
    return (
        <div>
            <div className="container mx-auto experience grid sm:grid-cols-1 lg:grid-cols-2 m-5 mt-20">

                <div className="years bg-yellow-500 mr-5 p-4 ">
                    <h2 className="text-white font-semibold text-2xl">25+</h2>
                    <h2 className="text-black font-bold text-4xl">Years Of Experience</h2>
                </div>

                <div className="ex-details w-65">
                    <h3 className="text-xl font-bold p-3">ABOUT US</h3>
                    <h2 className="text-4xl font-semibold p-3">We Are Into Lead <span className="text-yellow-500">Logistics & Freight Services</span></h2>
                    <h3 className="text-xl font-medium p-3">We At CargoTon Offer The Best Services At The Best Fares Available In The Market.</h3>
                    <p className="text-sm font-base p-3">ur company has grown into a dynamic force in transportation across the world. Equipped with state-of-the-art technologies, warehouse services, carrier-partners and dedicated employees, CargoTon will meet all of your transport needs.</p>
                    <div className="exp-btn flex gap-10 p-3">
                        <button className="bg-yellow-500 text-black text-lg font-bold p-3 px-6">Read More</button>
                        <button className="bg-gray-900 text-white text-lg font-bold p-3 px-6" >Contact Us</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Expeience;