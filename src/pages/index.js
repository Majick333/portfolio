import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainSection from '../components/Main';
import InfoDisplay from '../components/InfoDisplay';
import { aboutSlide } from '../components/InfoDisplay/Data';
import Work from '../components/Work/'
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        // e.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar  toggle={toggle} />
        <MainSection />
        <Work/>
        <InfoDisplay {...aboutSlide}/>
        <Footer/>

    </> 
    );
};

export default Home
