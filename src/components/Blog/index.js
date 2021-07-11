import React from 'react'
import Blog1 from '../../images/blog1.png';
import Blog2 from '../../images/blog2.png';
import Blog3 from '../../images/blog3.png';
import { BlogContainer, BlogH1, BlogWrapper,
     BlogCard, BlogIcon, BlogH2, BlogDescription } from './BlogElements.js'

const BlogSection = () => {
    return (
        <BlogContainer id='blog'>
            <BlogH1>Blog</BlogH1>
            <BlogWrapper>

                <BlogCard>
                    <a href='https://thisabstractcode.blogspot.com/2020/10/rails-calendar.html' target='_blank' rel="noreferrer" >
                    <BlogIcon src={Blog1}/>
                    </a>
                    <BlogH2>Rails Calendar</BlogH2>
                    <BlogDescription>A breakdown of how to make a calendar organizer in ruby on rails</BlogDescription>                   
                </BlogCard>

                <BlogCard>
                    <a href='https://thisabstractcode.blogspot.com/2021/04/filtering-on-frontend-javascripts-fetch.html' target='_blank' rel="noreferrer">
                    <BlogIcon src={Blog2} />
                    </a>
                    <BlogH2>Filtering on the Frontend</BlogH2>
                    <BlogDescription>Javascript's Fetch and Filter Functions</BlogDescription>                  
                </BlogCard>

                <BlogCard>
                    <a href='https://thisabstractcode.blogspot.com/2021/07/building-my-portfolio-site-with-react.html' target='_blank' rel="noreferrer">
                    <BlogIcon src={Blog3}/>
                    </a>
                    <BlogH2>Stylized Components</BlogH2>
                    <BlogDescription>A brief look at some of the styled components featured on this site</BlogDescription>   
                </BlogCard>

            </BlogWrapper>
            
        </BlogContainer>
    )
}

export default BlogSection
