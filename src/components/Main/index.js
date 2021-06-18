import React from 'react'
import  Video from '../../videos/video.mp4';
import { MainContainer, MainBackGround, VideoBackground } from './MainElements';

const MainSection = () => {
    return (
        <MainContainer>
            <MainBackGround>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </MainBackGround>


        </MainContainer>
    )
}

export default MainSection
