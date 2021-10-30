import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo.webp'

const Footer = () => {
    return (
        <div >
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 bg-gray-900 p-10">
                <div className="logo mb-4">
                    <img src={logo} width="350px" alt="" />
                </div>
                <div className="menu1 mb-5">
                    <h2 className="text-xl font-bold text-white border-l-2 border-yellow-500 p-2">Company</h2>
                    <ul className="mt-10">
                        <li className="text-white font-semibold py-2"><Link to="/about">About Us</Link> </li>
                        <li className="text-white font-semibold py-2"><Link to="/contact">Contact Us</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/faq">FAQ</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/career">Career</Link></li>

                    </ul>
                </div>
                <div className="menu2 mb-5">
                    <h2 className="text-xl font-bold text-white border-l-2 border-yellow-500 p-2">Services</h2>
                    <ul className="mt-10">
                        <li className="text-white font-semibold py-2"><Link to="/services">Express Delivery</Link> </li>
                        <li className="text-white font-semibold py-2"><Link to="/services">Courier</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/services">Same Day Delivery</Link></li>
                        <li className="text-white font-semibold py-2"><Link to="/services">Air Freight</Link></li>

                    </ul>
                </div>
                <div className="menu1 mb-5">
                    <h2 className="text-xl font-bold text-white border-l-2 border-yellow-500 p-2">Get in touch</h2>
                    <div className="get-area1 mt-10">
                        <h2 className="text-white font-semibold">Need Help?</h2>
                        <h2 className="text-white font-semibold text-yellow-500">(406) 555-0120</h2>
                    </div>
                    <div className="get-area1 mt-5">
                        <h2 className="text-white font-semibold">Email Us At:</h2>
                        <h2 className="text-white font-semibold text-yellow-500">service.xcel.service@xcelcourier.com</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;