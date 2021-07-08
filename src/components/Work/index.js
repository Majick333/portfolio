import React from 'react'
import Icon1 from '../../images/icon1.svg';
import Icon2 from '../../images/icon2.svg';
import Icon3 from '../../images/icon3.svg';
import { WorkContainer, WorkH1, WorkWrapper,
     WorkCard, WorkIcon, WorkH2, WorkDescription } from './WorkElements'

const WorkSection = () => {
    return (
        <WorkContainer id='projects'>
            <WorkH1>Projects</WorkH1>
            <WorkWrapper>

                <WorkCard>
                    <a href='https://github.com/Majick333/SinatraProject' target='_blank' rel="noreferrer">
                    <WorkIcon src={Icon1}/>
                    </a>
                    <WorkH2>Task Manager</WorkH2>
                    <WorkDescription>Task Manager Built on Ruby's Sinatra Framework</WorkDescription>                   
                </WorkCard>

                <WorkCard>
                    <a href='https://github.com/Majick333/notebook-project' target='_blank' rel="noreferrer">
                    <WorkIcon src={Icon2} />
                    </a>
                    <WorkH2>Organizer on Rails</WorkH2>
                    <WorkDescription>A notebook app with calendar functionality</WorkDescription>                  
                </WorkCard>

                <WorkCard>
                    <a href='https://github.com/Majick333/flatiron-js-project' target='_blank' rel="noreferrer">
                    <WorkIcon src={Icon3}/>
                    </a>
                    <WorkH2>JavaScript Chat</WorkH2>
                    <WorkDescription>A chat app made with vanilla javascript</WorkDescription>   
                </WorkCard>

            </WorkWrapper>
            
        </WorkContainer>
    )
}

export default WorkSection
