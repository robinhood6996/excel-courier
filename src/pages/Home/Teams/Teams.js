import React from 'react';
import team1 from '../../../images/team/01.jpg';
import team2 from '../../../images/team/02-1.jpg';
import team3 from '../../../images/team/03.jpg';
import team4 from '../../../images/team/04.jpg';
import './Teams.css';

const Teams = () => {
    return (
        <div className="mt-10 bg-gray-50">
            <div className="team-heading w-full text-center p-10">
                <h4 className="text-yellow-500 font-bold text-xl">Team Member</h4>
                <h2 className="text-gray-900 font-bold text-4xl">Our <span>Talented Team</span></h2>
            </div>
            <div className="container grid sm:grid-cols-1 lg:grid-cols-4 p-4 mx-auto ">

                <div className="team-member p-2 w">
                    <figure class="relative  cursor-pointer">
                        <div className="team-member-img">
                            <img src={team1} alt="" />
                        </div>
                        <figcaption class="team-details absolute text-xl text-center  -mt-16 text-white py-2 px-4 bg-yellow-500  w-full mx-auto">
                            <div>
                                <h1 className="font-bold text-xl ">Jimi Cha</h1>
                            </div>
                            <div>
                                <h1 className="font-semibold text-gray-900 text-lg">CEO</h1>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                <div className="team-member p-2 w">
                    <figure class="relative  cursor-pointer">
                        <div className="team-member-img">
                            <img src={team2} alt="" />
                        </div>
                        <figcaption class="team-details absolute text-xl text-center  -mt-16 text-white py-2 px-4 bg-yellow-500  w-full">
                            <div>
                                <h1 className="font-bold text-xl ">George Len</h1>
                            </div>
                            <div>
                                <h1 className="font-semibold text-gray-900 text-lg">Manager</h1>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="team-member p-2 w">
                    <figure class="relative  cursor-pointer">
                        <div className="team-member-img">
                            <img src={team3} alt="" />
                        </div>
                        <figcaption class="team-details absolute text-xl text-center  -mt-16 text-white py-2 px-4 bg-yellow-500  w-full">
                            <div>
                                <h1 className="font-bold text-xl ">Kayle Verey</h1>
                            </div>
                            <div>
                                <h1 className="font-semibold text-gray-900 text-lg">Engineer</h1>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="team-member p-2 w">
                    <figure class="relative  cursor-pointer">
                        <div className="team-member-img">
                            <img src={team4} alt="" />
                        </div>
                        <figcaption class="team-details absolute text-xl text-center  -mt-16 text-white py-2 px-4 bg-yellow-500  w-full">
                            <div>
                                <h1 className="font-bold text-xl ">Bilgon Benn</h1>
                            </div>
                            <div>
                                <h1 className="font-semibold text-gray-900 text-lg">Marketing Manager</h1>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </div>
        </div>
    );
};

export default Teams;