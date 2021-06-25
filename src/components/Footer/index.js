import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrapper, LinkContainer, 
         LinkWrapper, LinkItems, LinkTitle, FooterLink,
        SocialMedia, SocialMediaWrapper, SocialLogo, SocialLinkIcon, SiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <LinkContainer> 
                    <LinkWrapper> 
                        <LinkItems>
                            <LinkTitle> Footer  </LinkTitle>
                                <FooterLink to='/'>Link</FooterLink>
                                <FooterLink to='/'>Link</FooterLink>
                                <FooterLink to='/'>Link</FooterLink>
                                <FooterLink to='/'>Link </FooterLink>
                        </LinkItems>

                        <LinkTitle> Footer  </LinkTitle>
                        <LinkItems>
                                <FooterLink to='/'>Link</FooterLink>
                                <FooterLink to='/'>Link</FooterLink>
                                <FooterLink to='/'>Link</FooterLink>
                                <FooterLink to='/'>Link</FooterLink>
                        </LinkItems>

                    </LinkWrapper>
                </LinkContainer>
                    <SocialMedia>
                        <SocialMediaWrapper>
                            <SocialLogo to='/'>Ryan McCauley</SocialLogo> \

                                <SocialLinkIcon href='/' target='_blank' aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialLinkIcon>

                                <SocialLinkIcon href='/' target='_blank' aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialLinkIcon>

                                <SocialLinkIcon href='/' target='_blank' aria-label="YouTube">
                                    <FaYoutube/>
                                </SocialLinkIcon>

                                <SocialLinkIcon href='/' target='_blank' aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialLinkIcon>

                            <SiteRights> © Ryan McCauley {new Date().getFullYear()} All Rights Reserved. </SiteRights>

                        </SocialMediaWrapper>
                    </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
