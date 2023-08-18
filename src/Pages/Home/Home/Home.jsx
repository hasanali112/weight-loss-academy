import React, { useState } from 'react';
import Banner from '../Banner';
import Features from '../Features/Features';
import HelpNeed from '../HelpNeed/HelpNeed';
import { Helmet } from 'react-helmet-async';
import PopularInstructor from '../PopularInstrutor/PopularInstructor';
import PopularClass from '../PopularClass/PopularClass';
import SubBanner from '../SubBanner/SubBanner';

const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>Home - Weight Loss Academy</title>
            </Helmet>
            <Banner></Banner>
            <SubBanner></SubBanner>
            <Features></Features>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <HelpNeed></HelpNeed>
        </div>
    );
};

export default Home;