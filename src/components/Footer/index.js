import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaBlogger } from 'react-icons/fa'
import { FooterContainer, FooterWrapper, LinkContainer, 
         LinkWrapper, SocialMedia, SocialMediaWrapper, SocialLogo, SocialLinkIcon, SiteRights } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <LinkContainer> 
                    <LinkWrapper> 
                        {/* <LinkItems>
                            <LinkTitle> Footer  </LinkTitle>
                                <FooterLink to='/'> Link </FooterLink>
                                <FooterLink to='/'> Link </FooterLink>
                                <FooterLink to='/'> Link </FooterLink>
                                <FooterLink to='/'> Link </FooterLink>
                        </LinkItems> */}
                    </LinkWrapper>
                </LinkContainer>
                    <SocialMedia>
                        <SocialMediaWrapper>
                            <SocialLogo to='/'>Ryan McCauley</SocialLogo> \

                                <SocialLinkIcon href='https://www.facebook.com/ryan.mccauley.921/' target='_blank' aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialLinkIcon>

                                <SocialLinkIcon href='https://www.linkedin.com/in/ryan-mccauley-30a11b216/' target='_blank' aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialLinkIcon>

                                <SocialLinkIcon href='https://www.youtube.com/channel/UCVBXpRrbj-QyLOKd3K87hjg' target='_blank' aria-label="YouTube">
                                    <FaYoutube/>
                                </SocialLinkIcon>

                                <SocialLinkIcon href='https://thisabstractcode.blogspot.com/' target='_blank' aria-label="Blog">
                                    <FaBlogger/>
                                </SocialLinkIcon>

                                <SocialLinkIcon href='https://twitter.com/RyanMcC87554176/' target='_blank' aria-label="Blog">
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
