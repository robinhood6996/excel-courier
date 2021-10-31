import React from 'react';
import './About.css';
import img from '../../images/about/logistic2.jpg';
import HomeServices from '../Services/HomeServices/HomeServices';


const About = () => {
    return (
        <div>

            {/* About Title and image  */}
            <div className="teams-about container mx-auto ">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 my-10 p-2">
                    <div className="team-details my-2">
                        <h2 className="text-xl font-bold border-l-2 border-yellow-500 p-2">ABOUT US</h2>
                        <h2 className="text-5xl font-bold">Leaders In The <span className="text-yellow-500">Logistics Services</span></h2>
                    </div>

                    <div className="about-img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            {/* Experience  */}
            <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-2 my-10 p-2 bg-gray-50">
                <div className="exp-header">
                    <h2 className="text-xl font-bold border-l-2 border-yellow-500 p-3">ACHIEVEMENT</h2>
                    <h2 className="text-5xl font-bold my-4">Our Experience<span className="text-yellow-500"> Your Advantage</span></h2>
                    <p className="text-lg font-light text-gray-500 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex numquam molestiae itaque ipsam odit recusandae vitae et architecto sed mollitia?</p>
                </div>

                <div className="exp-details flex my-auto m-2">
                    <div className="exp-one bg-yellow-500 font-bold text-2xl px-5 py-10">
                        <h2>90+ Companies</h2>
                    </div>
                    <div className="exp-two bg-yellow-500 font-bold text-2xl px-5 py-10 ">
                        <h2>8+ Countries</h2>
                    </div>
                </div>
            </div>


            <div>
                <HomeServices></HomeServices>
            </div>

        </div>
    );
};

export default About;