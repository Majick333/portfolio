import React from 'react';
import {Button} from '../ButtonElements';
import { InfoDisplayContainer, InfoDisplayWrapper,
         DisplayRow, Column1, Top, Heading,
         Subtitle, ButtonWrapper, InfoTextWrapper,
         Column2, ImageWrap,Img } from './InfoDisplayElements';


const InfoDisplay = () => {
    return (
        <>
          <InfoDisplayContainer>
              <InfoDisplayWrapper>
                  <DisplayRow>
                      <Column1>
                            <InfoTextWrapper>
                                <Top>Topline</Top>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                    <ButtonWrapper>
                                        <Button to='home'>Button</Button>
                                    </ButtonWrapper>
                            </InfoTextWrapper>            
                      </Column1>
                        <Column2>
                            <ImageWrap>
                                <Img/>
                            </ImageWrap>
                        </Column2>
                  </DisplayRow>
              </InfoDisplayWrapper>
          </InfoDisplayContainer> 
        </>
    )
}

export default InfoDisplay
