import React from 'react';
import { Button } from '../ButtonElements';
import { FaGem, FaHtml5, FaJs, FaReact, FaCss3 } from 'react-icons/fa';
import { InfoDisplayContainer, InfoDisplayWrapper,
         DisplayRow, Column1, Top, Heading,
         Subtitle, ButtonWrapper, InfoTextWrapper,
         Column2, ImageWrap, Img, TechnologyIcon, IconWrapper } from './InfoDisplayElements';
import myProfilePic from '../../images/portfolio.jpeg'



const InfoDisplay = ({
    lightBg, id, imgStart, top, lightText, heading,
     darkText, description, buttonLabel, img, alt, primary, dark}) => {
    return (
        <>
          <InfoDisplayContainer lightBg={lightBg} id={id}>
              <InfoDisplayWrapper>
                  <DisplayRow imgStart={imgStart}>
                      <Column1>
                            <InfoTextWrapper>
                                <Top><IconWrapper>
                                    
                                    <TechnologyIcon >
                                        <FaGem /> Ruby::
                                    </TechnologyIcon> <br/>

                                    <TechnologyIcon>
                                        <FaJs/> JavaScript::
                                    </TechnologyIcon> <br/>

                                    <TechnologyIcon>
                                        <FaReact/> React::
                                    </TechnologyIcon> <br/>

                                    <TechnologyIcon>
                                        <FaHtml5/> HTML5::
                                    </TechnologyIcon> <br/>
                                    
                                    <TechnologyIcon>
                                        <FaCss3/> CSS
                                    </TechnologyIcon> <br/>

                                    </IconWrapper></Top>

                                    <br/>
                                
                                <Heading lightText={lightText}>{heading}</Heading>
                                
                                <Subtitle darkText={darkText}> {description} </Subtitle>
                                    <ButtonWrapper>
                                        <Button exact to='/contact' smooth={true} duration={500} spy={true} offset={-80} primary={primary ? 1 : 0} dark={dark ? 1: 0}>{buttonLabel}</Button>
                                    </ButtonWrapper>

                                    
                            </InfoTextWrapper>            
                      </Column1>
                        <Column2>
                            <ImageWrap>
                                <Img src={myProfilePic} alt={alt}/>
                            </ImageWrap>
                        </Column2>
                  </DisplayRow>
              </InfoDisplayWrapper>
          </InfoDisplayContainer> 
        </>
    ) 
}

export default InfoDisplay
