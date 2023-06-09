import profilePic from "../images/profilepic.jpg";
import pennPic from "../images/logos/Penn.png";
import ucPic from "../images/logos/UC.png";
import mailIconBlack from "../images/social_icons/mail_icon_2.png";
import githubIconBlack from "../images/social_icons/github_icon_2.png";
import linkedinIconBlack from "../images/social_icons/linkedin_icon_2.png";
import steamIconBlack from "../images/social_icons/steam_icon_2.png";
import mailIconWhite from "../images/social_icons/mail_icon.png";
import githubIconWhite from "../images/social_icons/github_icon.png";
import linkedinIconWhite from "../images/social_icons/linkedin_icon.png";
import steamIconWhite from "../images/social_icons/steam_icon.png";

export const NAME = 'Daniela Garcia';

export const PHOTO = profilePic;

export const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sagittis id consectetur purus ut. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Cursus vitae congue mauris rhoncus aenean vel. Tellus id interdum velit laoreet id donec ultrices tincidunt. Suspendisse faucibus interdum posuere lorem ipsum. A erat nam at lectus urna duis. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pharetra sit amet aliquam id diam maecenas ultricies mi. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Pretium vulputate sapien nec sagittis aliquam. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Proin fermentum leo vel orci. Justo donec enim diam vulputate ut pharetra.';

export const CV = '';

export const SKILLS = {
    'Programming Languages': {
      C: 'devicon-c-plain',
      Java: 'devicon-java-plain',
      JavaScript: 'devicon-javascript-plain',
      Python: 'devicon-python-plain',
    },
    'Web Development': {
      HTML: 'devicon-html5-plain',
      CSS: 'devicon-css3-plain',
      React: 'devicon-react-original',
      Nodejs: 'devicon-nodejs-plain',
    },
    'Databases': {
      MySQL: 'devicon-mysql-plain',
      MongoDB: 'devicon-mongodb-plain',
      Neo4j: 'devicon-neo4j-plain',
    },
    'Design Tools': {
      Figma: 'devicon-figma-plain',
      Photoshop: 'devicon-photoshop-plain',
      Illustrator: 'devicon-illustrator-plain',
    },
    'Cloud & Infrastructure': {
      AWS: 'devicon-amazonwebservices-plain',
      Docker: 'devicon-docker-plain',
    },
    'General Tools': {
      Git: 'devicon-git-plain',
      GitHub: 'devicon-github-original',
      LaTeX: 'devicon-latex-original',
    },
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