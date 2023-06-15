import personalwebMain from "../images/projects/personalwebsite/main.jpg";

import shakeitMain from "../images/projects/shakeit/main.jpg";
import shakeit1 from "../images/projects/shakeit/1.jpg";
import shakeit2 from "../images/projects/shakeit/2.jpg";
import shakeit3 from "../images/projects/shakeit/3.jpg";
import shakeit4 from "../images/projects/shakeit/4.jpg";
import shakeit5 from "../images/projects/shakeit/5.jpg";
import shakeit6 from "../images/projects/shakeit/6.jpg";
import shakeit7 from "../images/projects/shakeit/7.jpg";

import sdohMain from "../images/projects/sdoh/main.jpg";

import myucMain from "../images/projects/myuc/main.jpg";
import myuc1 from "../images/projects/myuc/1.jpg";
import myuc2 from "../images/projects/myuc/2.jpg";
import myuc3 from "../images/projects/myuc/3.jpg";
import myuc4 from "../images/projects/myuc/4.jpg";
import myuc5 from "../images/projects/myuc/5.jpg";
import myuc6 from "../images/projects/myuc/6.jpg";
import myuc7 from "../images/projects/myuc/7.jpg";
import myuc8 from "../images/projects/myuc/8.jpg";
import myuc9 from "../images/projects/myuc/9.jpg";
import myuc10 from "../images/projects/myuc/10.jpg";
import myuc11 from "../images/projects/myuc/11.jpg";
import myuc12 from "../images/projects/myuc/12.jpg";
import myuc13 from "../images/projects/myuc/13.jpg";
import myuc14 from "../images/projects/myuc/14.jpg";
import myuc15 from "../images/projects/myuc/15.jpg";
import myuc16 from "../images/projects/myuc/16.jpg";

export const DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const PROJECTS = [
    {
      id: 1,
      title: "My personal website",
      tags: [
        "HTML/CSS", "JavaScript", "Nodejs", "Programming", "React"],
      preview: "I have personally designed and programmed this website from scratch, utilizing React and Nodejs, as a platform to demonstrate my proficiency in UX/UI design and web development.",
      description: [
        "TODO",
      ],
      link: "https://github.com/danielagarcia9/danielagarcia9.github.io",
      image: personalwebMain,
      photos: [
        {
          label: 'Main',
          image: personalwebMain,
        },
      ],
    },
    {
      id: 2,
      title: "Shake it!",
      tags: ["HTML/CSS", "JavaScript", "Nodejs", "Programming", "React"],
      preview: "This project showcases my web development skills and passion for mixology. It's a dedicated website featuring a variety of cocktail recipes, ingredients, and food pairings.",
      description: [
        "This application serves as the culmination of my efforts in CS50's Introduction to Computer Science course, where I demonstrate my expertise in web development while showcasing my passion for mixology.",
        "This is a dedicated website that revolves around cocktails and drinks. Here, you can explore a wide variety of drink recipes and the necessary ingredients to make them. Alongside an extensive collection of cocktail recipes, I provide food pairing ideas to enhance the drinking experience.",
        "The development of this website involved the utilization of React for the frontend and Nodejs for the backend. To populate the content, I incorporated two different APIs: The Cocktail DB and The Meal DB, which offer free access at their basic level.",
      ],
      link: "https://github.com/danielagarcia9/Shake-it",
      image: shakeitMain,
      photos: [
        {
          label: 'Main',
          image: shakeitMain,
        },
        {
          label: 'Cocktail of the day page',
          image: shakeit1,
        }, 
        {
          label: 'Cocktail of the day page - Recipe',
          image: shakeit2,
        }, 
        {
          label: 'Find cocktail by name page',
          image: shakeit3,
        }, 
        {
          label: 'Find cocktail by name page - Details',
          image: shakeit4,
        }, 
        {
          label: 'Find cocktail by ingredient page',
          image: shakeit5,
        }, 
        {
          label: 'Find cocktail by ingredient page - Results',
          image: shakeit6,
        }, 
        {
          label: 'Pair it with food page',
          image: shakeit7,
        }
      ],
    },
    {
      id: 3,
      title: "Social Health Insights",
      tags: ["HTML/CSS", "JavaScript", "MySQL", "Nodejs", "Programming", "React"],
      preview: "This collaborative project focused on synthesize Social Determinants of Health data and health outcomes into an easily accessible website, showing disparities in opportunities across different areas of the United States.",
      description: [
        "Social Determinants of Health encompass the conditions under which individuals are born, grow, live, work, and age, and the impact of these conditions on their overall health and well-being. These determinants include various factors such as income, education, employment, housing, and social support. Extensive research has consistently shown that social determinants of health significantly influence individuals' health outcomes, with those experiencing disadvantage in these areas being at a higher risk of poor health and chronic diseases. Understanding and addressing social determinants of health is crucial for improving population health overall and achieving health equity.",
        "This project was collaboratively developed with colleagues from my master's degree program, aiming to synthesize this data into an easily accessible website. Our objective was to demonstrate the disparities in opportunities across different areas of the United States. I took the base code and made some modifications to be able to showcase it in my portfolio.",
        "For this project, we selected two primary datasets: one focusing on SDoH and the other on health outcomes. Both datasets were collected at the census tract level, which represents statistical subdivisions of a county and can be updated by local participants before each decennial census. Census tracts offer a smaller level of granularity compared to zip codes, enabling us to highlight significant differences even within relatively close geographical areas. We joined the data based on the census tract to establish correlations between SDoH and health outcomes.",
        "To build the project, we utilized MySQL as our SQL database. The front end was developed using React, while the back end was constructed with Nodejs. We incorporated the MUI JavaScript library, as well as Leaflet and Leaflet-react, which allowed us to visualize GeoJSON data on a map. These tools and technologies formed the foundation of our project, enabling us to present the information effectively and create meaningful visualizations.",
      ],
      link: "TODO",
      image: sdohMain,
      photos: [
        {
          label: 'Main',
          image: sdohMain,
        },
      ],
    },
    {
      id: 4,
      title: "Data Analyzer Program",
      tags: ["Programming", "Java"],
      preview: "TODO",
      description: [
        "TODO",
      ],
      link: "",
      image: "TODO",
      photos: [],
    },
    {
      id: 5,
      title: "Naval Clash Game",
      tags: ["Programming", "Java"],
      preview: "TODO",
      description: [
        "TODO",
      ],
      link: "",
      image: "TODO",
      photos: [],
    },
    {
      id: 6,
      title: "My UC",
      tags: ["Figma", "UX/UI Design"],
      preview: "This project showcases my UX/UI skills applied to a tangible problem space. The app I designed is specifically tailored to address the everyday questions and concerns of university students by providing them with comprehensive information.",
      description: [
        "As a student who personally experienced the challenges of finding information quickly and effectively at my university, I felt compelled to address these issues for future students. It was clear that many of us struggled to navigate through various webpages, social networks, and other resources just to access the information we needed. The lack of a centralized platform that could accommodate our mobile needs was a major pain point. That's why I embarked on the development of the 'My UC' app as my final project for the User Experience Design Certificate Course I did at Brainstation.",
        "This app aims to provide a solution by offering a user-friendly interface where students can easily access their class schedules, obtain information about their classes and fellow students, navigate campus using maps and directions, utilize library services, stay informed about events and news, and find information about safety and emergencies. Through extensive research, including user interviews and surveys, I gained valuable insights into the needs and preferences of university students. I used this information to create user personas, design the app's information architecture, and develop user flows and sketches. Rigorous testing and feedback allowed me to refine the wireframes and design a polished user interface using Figma.",
      ],
      link: "https://www.figma.com/proto/Mv8AHwTpqufKteyIiDmAe0/Project-%231?page-id=0%3A1&type=design&node-id=4-434&viewport=339%2C489%2C0.13&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1",
      image: myucMain,
      photos: [
        {
          label: 'Main',
          image: myucMain,
        },
        {
          label: 'User Persona 1',
          image: myuc1,
        },
        {
          label: 'User Persona 2',
          image: myuc2,
        },
        {
          label: 'Card sorting',
          image: myuc3,
        },
        {
          label: 'Information architecture',
          image: myuc4,
        },
        {
          label: 'User flow 1',
          image: myuc5,
        },
        {
          label: 'User flow 2',
          image: myuc6,
        },
        {
          label: 'Sketches task 1.1',
          image: myuc7,
        },
        {
          label: 'Sketches task 1.2',
          image: myuc8,
        },
        {
          label: 'Sketches task 2.1',
          image: myuc9,
        },
        {
          label: 'Sketches task 2.2',
          image: myuc10,
        },
        {
          label: 'Wireframes task 1.1',
          image: myuc11,
        },
        {
          label: 'Wireframes task 1.2',
          image: myuc12,
        },
        {
          label: 'Wireframes task 2.1',
          image: myuc13,
        },
        {
          label: 'Wireframes task 2.2',
          image: myuc14,
        },
        {
          label: 'UI design',
          image: myuc15,
        },
        {
          label: 'Figma preview',
          image: myuc16,
        },
      ],
      prototype: '<iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="100%" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMv8AHwTpqufKteyIiDmAe0%2FProject-%25231%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D4-434%26viewport%3D339%252C489%252C0.13%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2%26show-proto-sidebar%3D1" allowfullscreen />',
    },
];

export const TAGS = PROJECTS.reduce((tags, project) => {
  project.tags.forEach((tag) => {
    if (!Object.values(tags).includes(tag)) {
      const nextKey = Object.keys(tags).length + 1;
      tags[nextKey] = tag;
    }
  });
  return tags;
}, {});