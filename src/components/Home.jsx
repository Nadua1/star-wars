import React from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrowl from "./OpeningCrowl.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <OpeningCrowl/>
        </main>
    );
};

export default Home;