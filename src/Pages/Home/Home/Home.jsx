import React, { useState } from 'react';
import Banner from '../Banner';
import Features from '../Features/Features';
import HelpNeed from '../HelpNeed/HelpNeed';
import { Helmet } from 'react-helmet-async';
import PopularInstructor from '../PopularInstrutor/PopularInstructor';

const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>Home - Weight Loss Academy</title>
            </Helmet>
            <Banner></Banner>
            <Features></Features>
            <PopularInstructor></PopularInstructor>
            <HelpNeed></HelpNeed>
        </div>
    );
};

export default Home;