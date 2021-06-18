import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper } from './Elements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about"> About </SidebarLink>

                    <SidebarLink to="projects"> Projects </SidebarLink>

                    <SidebarLink to="blog"> Blog </SidebarLink>

                    <SidebarLink to="contact"> Contact </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
 