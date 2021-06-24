import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav,
     NavbarContainer,
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks } from './Elements';


const Navbar = ({toggle}) => {
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
