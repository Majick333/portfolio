import myProfilePic from '../../images/portfolio.jpeg'

export const aboutSlide = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    top: "",
    heading: "About me",
    subtitle: "",
    description: "I'm an independant web developer located in the east Texas area.",
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
};