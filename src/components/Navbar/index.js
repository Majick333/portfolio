import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav,
     NavbarContainer,
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks } from './Elements';
 

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
            <Nav>
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
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>


                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
