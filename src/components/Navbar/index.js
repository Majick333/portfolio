import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav,
     NavbarContainer,
     NavLogo, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks } from './Elements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>RM</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='about'>Projects</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='about'>Blog</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='about'>Contact</NavLinks>
                        </NavItem>


                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
