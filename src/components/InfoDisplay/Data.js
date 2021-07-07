import myProfilePic from '../../images/portfolio.jpeg'

export const aboutSlide = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    top: "More about",
    heading: "Ryan McCauley",
    subtitle: "I'm an independant web developer",
    description: "Contact me and let's talk about making your website idea into reality",
    buttonLabel: "Contact Me",
    imgStart: false,
    img:{myProfilePic},
    alt: {myProfilePic},
    dark: false,
    primary: true,
    darkText: false

};

export const blogSlide = {
    id: 'blog',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    top: "Some random thoughts...",
    heading: "on Coding",
    subtitle: "",
    description: "",
    buttonLabel: "View Blog",
    imgStart: false,

    // img: require('../../images/profile.jpg'),
    // alt: require('../../images/profile.jpg'),
    dark: true,
    primary: true,
    darkText: true    
}