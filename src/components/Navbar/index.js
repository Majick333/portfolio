import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { Nav,
     NavbarContainer,
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks } from './Elements';
import ContactPage from '../../pages/contact';
 

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scroll >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'>RM</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='blog'>Blog</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks> <Link to='/contact'> Contact </Link> </NavLinks>
                            {/* <Route path="/contact" component={ContactPage} exact /> */}
                        </NavItem>


                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
