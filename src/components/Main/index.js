import React from 'react'
import  Video from '../../videos/video.mp4';
import { MainContainer, MainBackGround, VideoBackground, MainContent, MainHeader, MainP } from './MainElements';

const MainSection = () => {
    return (
        <MainContainer>
            <MainBackGround>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </MainBackGround>

                <MainContent>
                    <MainHeader> Ryan McCauley </MainHeader>
                    <MainP> Musician, Developer, Tinkerer </MainP>
                </MainContent>
            


        </MainContainer>
    )
}

export default MainSection
