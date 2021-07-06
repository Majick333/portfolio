import React, {useState} from 'react'
import DashBoard from '../components/Admin/index'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';



const AdminDashBoardPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        // e.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle} />
            <DashBoard />      
        </>
    )
}

export default AdminDashBoardPage;
