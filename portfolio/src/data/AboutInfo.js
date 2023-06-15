import profilePic from "../images/profilepic.jpg";
import pennPic from "../images/logos/Penn.png";
import ucPic from "../images/logos/UC.png";
import mailIconWhite from "../images/social_icons/mail_white.png";
import mailIconBlack from "../images/social_icons/mail_black.png";
import mailIconGrey from "../images/social_icons/mail_grey.png";
import mailIconGreen from "../images/social_icons/mail_green.png";
import githubIconWhite from "../images/social_icons/github_white.png";
import githubIconBlack from "../images/social_icons/github_black.png";
import githubIconGrey from "../images/social_icons/github_grey.png";
import githubIconGreen from "../images/social_icons/github_green.png";
import linkedinIconWhite from "../images/social_icons/linkedin_white.png";
import linkedinIconBlack from "../images/social_icons/linkedin_black.png";
import linkedinIconGrey from "../images/social_icons/linkedin_grey.png";
import linkedinIconGreen from "../images/social_icons/linkedin_green.png";
import steamIconWhite from "../images/social_icons/steam_white.png";
import steamIconBlack from "../images/social_icons/steam_black.png";
import steamIconGrey from "../images/social_icons/steam_grey.png";
import steamIconGreen from "../images/social_icons/steam_green.png";

export const NAME = 'Daniela Garcia';

export const PHOTO = profilePic;

export const DESCRIPTION = [
  `I am a Psychology Graduate with 7+ years of experience as an Organizational Development consultant in the HR field, seeking a new career in software engineering. I am a creative problem solver with a passion for UX/UI design and photography. I enjoy the challenge of understanding user needs and designing solutions that are not only functional but also aesthetically pleasing. I am always looking for ways to apply my various skills to tackle complex challenges.`,
  `In my previous role as an Organizational Development consultant, I gained extensive experience in analyzing and improving organizational processes, fostering teamwork and collaboration, and understanding the bigger picture. This background has equipped me with strong analytical and problem-solving skills, as well as the ability to comprehend and adapt to the needs of different stakeholders. Moreover, I have a proven track record of delivering successful outcomes that align with organizational objectives.`,
  `My passion for UX/UI design and photography complements my interest in software engineering. I believe that a user-centered approach is crucial in creating software that not only meets functional requirements but also delivers a seamless and enjoyable user experience. With my understanding of human behavior and psychology, I can leverage my skills to develop intuitive interfaces, conduct user research, and implement design principles that enhance usability and user satisfaction.`,
];

export const CV = '';

export const INTROSKILLS = 'Throughout my education and professional journey, I have had the opportunity to work with a diverse range of tools, languages, and technologies. These experiences have honed my skills and equipped me with a versatile skill set that I can bring to the table.';

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
        srcGrey: mailIconGrey,
        srcGreen: mailIconGreen,
    },
    {
        name: 'Github',
        link: 'https://github.com/dgarciaromani',
        srcBlack: githubIconBlack,
        srcWhite: githubIconWhite,
        srcGrey: githubIconGrey,
        srcGreen: githubIconGreen,
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/dgarciaromani/?locale=en_US',
        srcBlack: linkedinIconBlack,
        srcWhite: linkedinIconWhite,
        srcGrey: linkedinIconGrey,
        srcGreen: linkedinIconGreen,
    },
    {
        name: 'Steam',
        link: 'https://steamcommunity.com/id/danielagarcia9/',
        srcBlack: steamIconBlack,
        srcWhite: steamIconWhite,
        srcGrey: steamIconGrey,
        srcGreen: steamIconGreen,
    },
];