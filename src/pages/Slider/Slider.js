import React from 'react';
import './Slider.css';
import banner from '../../images/banner2.png';

const Slider = () => {
    return (
        <div>
            <div className="banner-area bg-gradient-to-l md:bg-gradient-to-r ">
                {/* <div className="banner-details">
                    <h2 className="text-xl text-yellow-500">WELCOME TO EXCEL COURIER</h2>
                    <h1 className="text-5xl text-yellow-500">We Provide Best Courier & Perel Service</h1>
                    <button className="">Contact Us</button>

                </div> */}
                <img src={banner} alt="" />
            </div>
            <div className="banner-2 mt-0">

            </div>
        </div>
    );
};

export default Slider;