import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainSection from '../components/Main';


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
    </>
    );
};

export default Home
