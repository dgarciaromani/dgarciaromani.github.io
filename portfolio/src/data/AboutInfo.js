import profilePic from "../images/profilepic.jpg";
import pennPic from "../images/Penn.png";
import ucPic from "../images/UC.png";
import mailIconBlack from "../images/mail_icon_2.png";
import githubIconBlack from "../images/github_icon_2.png";
import linkedinIconBlack from "../images/linkedin_icon_2.png";
import steamIconBlack from "../images/steam_icon_2.png";
import mailIconWhite from "../images/mail_icon.png";
import githubIconWhite from "../images/github_icon.png";
import linkedinIconWhite from "../images/linkedin_icon.png";
import steamIconWhite from "../images/steam_icon.png";

export const NAME = 'Daniela Garcia';

export const PHOTO = profilePic;

export const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sagittis id consectetur purus ut. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Cursus vitae congue mauris rhoncus aenean vel. Tellus id interdum velit laoreet id donec ultrices tincidunt. Suspendisse faucibus interdum posuere lorem ipsum. A erat nam at lectus urna duis. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pharetra sit amet aliquam id diam maecenas ultricies mi. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Pretium vulputate sapien nec sagittis aliquam. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Proin fermentum leo vel orci. Justo donec enim diam vulputate ut pharetra.';

export const CV = '';

export const SKILLS = {
    'Programming Languages': ['devicon-c-plain', 'devicon-java-plain-wordmark', 'devicon-javascript-plain', 'devicon-python-plain-wordmark'],
    'Web Development': ['devicon-html5-plain-wordmark', 'devicon-css3-plain-wordmark', 'devicon-react-original-wordmark', 'devicon-nodejs-plain-wordmark'],
    'Databases': ['devicon-mysql-plain-wordmark', 'devicon-mongodb-plain-wordmark', 'devicon-neo4j-plain-wordmark'],
    'Design Tools': ['devicon-figma-plain', 'devicon-photoshop-plain', 'devicon-illustrator-plain'],
    'Cloud & Infrastructure': ['devicon-amazonwebservices-plain-wordmark', 'devicon-docker-plain-wordmark'],
    'General Tools': ['devicon-git-plain-wordmark', 'devicon-github-original-wordmark', 'devicon-latex-original'],
};

export const EDUCATION = [
    {
      logo: pennPic,
      degree: 'Master in Computer and Information Technology',
      university: 'School of Engineering and Applied Science, University of Pennsylvania',
      srcWidth: '35px',
      srcHeight: '40px'
    },
    {
      logo: ucPic,
      degree: 'B.S. in Psychology, Master in Industrial and Organizational Psychology',
      university: 'Pontificia Universidad Católica de Chile',
      srcWidth: '50px',
      srcHeight: '50px'
    },
];


export const INTERESTS = [
    "Technology", 
    "UX/UI Design", 
    "Photography", 
    "Travelling", 
    "Fine Arts", 
    "Literature", 
    "Coffee!"
];

export const SOCIALMEDIA = [
    {
        name: 'Mail',
        link: 'mailto:dngarcia@seas.upenn.edu',
        srcBlack: mailIconBlack,
        srcWhite: mailIconWhite,
    },
    {
        name: 'Github',
        link: 'https://github.com/danielagarcia9',
        srcBlack: githubIconBlack,
        srcWhite: githubIconWhite,
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/danielagarcia9/?locale=en_US',
        srcBlack: linkedinIconBlack,
        srcWhite: linkedinIconWhite,
    },
    {
        name: 'Steam',
        link: 'https://steamcommunity.com/id/danielagarcia9/',
        srcBlack: steamIconBlack,
        srcWhite: steamIconWhite,
    },
];