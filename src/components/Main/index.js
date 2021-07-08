import React, {useState} from 'react'
import  Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import { MainContainer, MainBackGround, VideoBackground, MainContent, MainHeader, MainP } from './MainElements';

const MainSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }
    return (
        <MainContainer>
            <MainBackGround>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </MainBackGround>
                <MainContent>
                    <MainHeader> Ryan McCauley </MainHeader>
                    <MainP> Musician, Developer, Tinkerer </MainP>
                    <br/>
                    <Button to='/contact' target='_blank' onMouseEnter={onHover} onMouseLeave={onHover}>Contact Me</Button>
                </MainContent>
        </MainContainer>
    )
};

export default MainSection
