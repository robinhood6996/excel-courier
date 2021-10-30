import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
const HomeServices = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:6007/services')
            .then(res => setServices(res.data))
            .catch(err => console.log(err))
            .finally(setIsLoading(false))
    }, []);

    const handleSingleService = (id) => {
        const url = `service/${id}`;
        history.push(url);
    }

    if (isLoading) {
        return <div class="container mx-auto my-10 loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
    }

    return (
        <div>
            <div className="service-heading container mx-auto mt-4">
                <h2 className="text-2xl text-center font-semibold service-txt">Services</h2>
                <h2 className="text-5xl text-center font-bold">Get The <span className="text-yellow-500">Best Services</span> </h2>
            </div>

            <div className="services container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-5 m-5">


                {
                    services.map(service => <div key={service._id} className="service border-2 p-4 text-center">
                        <div className="service-img border-2 bg-gray-200 rounded p-4">
                            <img className="ml-auto mr-auto rounded" src={service.image1} alt="" />
                        </div>
                        <div className="service-description">
                            <h2 className="text-3xl font-bold p-2">{service.title}</h2>
                            <p className="p-2 text-justify">{service.short_desc.slice(0, 150)}</p>
                            <button className="bg-yellow-500 text-black font-bold p-2 rounded" onClick={() => handleSingleService(service._id)}>Book Now</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default HomeServices;
