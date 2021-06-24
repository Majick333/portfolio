import React from 'react'
import Icon1 from '../../images/icon1.svg';
import Icon2 from '../../images/icon2.svg';
import Icon3 from '../../images/icon3.svg';
import { WorkContainer, WorkH1, WorkWrapper,
     WorkCard, WorkIcon, WorkH2, WorkDescription } from './WorkElements'

const WorkSection = () => {
    return (
        <WorkContainer id='projects'>
            <WorkH1>My Projects</WorkH1>
            <WorkWrapper>

                <WorkCard>
                    <WorkIcon src={Icon1}/>
                    <WorkH2>Project Name</WorkH2>
                    <WorkDescription>Project Description</WorkDescription>
                </WorkCard>

                <WorkCard>
                    <WorkIcon src={Icon2}/>
                    <WorkH2>Project Name</WorkH2>
                    <WorkDescription>Project Description</WorkDescription>
                </WorkCard>

                <WorkCard>
                    <WorkIcon src={Icon3}/>
                    <WorkH2>Project Name</WorkH2>
                    <WorkDescription>Project Description</WorkDescription>
                </WorkCard>

            </WorkWrapper>
            
        </WorkContainer>
    )
}

export default WorkSection
