import React from 'react';
import { Button } from '../ButtonElements';
import { InfoDisplayContainer, InfoDisplayWrapper,
         DisplayRow, Column1, Top, Heading,
         Subtitle, ButtonWrapper, InfoTextWrapper,
         Column2, ImageWrap,Img } from './InfoDisplayElements';


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
                                <Top>{top}</Top>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <ButtonWrapper>
                                        <Button to='home' smooth={true} duration={500} spy={true} exact={true} offset={-80} primary={primary ? 1 : 0} dark={dark ? 1: 0}>{buttonLabel}</Button>
                                    </ButtonWrapper>
                            </InfoTextWrapper>            
                      </Column1>
                        <Column2>
                            <ImageWrap>
                                <Img src={img} alt={alt}/>
                            </ImageWrap>
                        </Column2>
                  </DisplayRow>
              </InfoDisplayWrapper>
          </InfoDisplayContainer> 
        </>
    ) 
}

export default InfoDisplay
