import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
    return (
        <div className="mb-20 mt-20">
            {/* Heading Seciton  */}
            <div className="page-heading ">
                <h2 className="font-bold text-medium border-l-2 border-yellow-500 p-2 text-center">CONTACT US</h2>
                <h2 className="font-bold text-3xl border-l-2 border-yellow-500 p-2 text-center">Let's Meet Us</h2>
            </div>

            {/* Contact Info  */}
            <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3">
                <div className="contact-info-one bg-gray-100 rounded py-10 mx-2 my-2">
                    <h2 className=" text-center"><FontAwesomeIcon className="text-5xl text-yellow-500 " icon={faLocationArrow} /></h2>
                    <h2 className="text-2xl text-yellow-500 text-center py-4">Address</h2>
                    <p className="text-light text-gray-500 text-center">1234 North Avenue Luke Lane, South , IN 360001, United States</p>
                </div>
                <div className="contact-info-one bg-gray-100 rounded py-10 mx-2 my-2">
                    <h2 className=" text-center"><FontAwesomeIcon className="text-5xl text-yellow-500 " icon={faPhone} /></h2>
                    <h2 className="text-2xl text-yellow-500 text-center py-4">Call 24/7</h2>
                    <p className="text-light text-gray-500 text-center">(303) 555-0105 <br />
                        (303) 555-0105</p>
                </div>
                <div className="contact-info-one bg-gray-100 rounded py-10 mx-2 my-2">
                    <h2 className=" text-center"><FontAwesomeIcon className="text-5xl text-yellow-500 " icon={faEnvelope} /></h2>
                    <h2 className="text-2xl text-yellow-500 text-center py-4">E-mail</h2>
                    <p className="text-light text-gray-500 text-center">support@example.com
                        <br />
                        cargo.help@gmail.com</p>
                </div>
            </div>

            {/* Form Section  */}
            <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3">

            </div>

        </div>
    );
};

export default Contact;