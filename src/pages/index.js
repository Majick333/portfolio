import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainSection from '../components/Main';
import InfoDisplay from '../components/InfoDisplay';


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
        <InfoDisplay />
    </> 
    );
};

export default Home
