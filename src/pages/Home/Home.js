import React from 'react';
import Slider from '../Slider/Slider';
import HomeServices from '../Services/HomeServices/HomeServices';
import Experience from './Experience/Expeience';
import Team from './Teams/Teams';
import Map from './Map/Map';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeServices></HomeServices>
            <Experience></Experience>
            <Team></Team>
            <Map></Map>
        </div>
    );
};

export default Home;