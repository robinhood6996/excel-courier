import React from 'react';

const Map = () => {
    return (
        <div>
            <div className="map w-full mt-20">
                <div className="map-heading ">
                    <h1 className="text-center text-5xl text-gray-900 m-4 font-bold">Our <span className="text-gray-900"> Location</span></h1>
                </div>
                <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6245177735796!2d90.35346971536282!3d23.760765594296256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6070c0cea3%3A0x2049d55dade07d56!2sHouse-161%2C%20Road-3%2C%20Mohammadia%20Housing%20Ltd.%2C%20Mohammadia%20Housing%20Ltd.%2C%203%20Rd%20No.%203%2C%20Dhaka%201207!5e0!3m2!1sen!2sbd!4v1635608069343!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>

            </div>
        </div>
    );
};

export default Map;