import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Discover from './Discover';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Discover />
            <Projects />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;