import React from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
const Home = () => {
    return (
    <>
        <Sidebar />
        <Navbar />
    </>
    );
};

export default Home
