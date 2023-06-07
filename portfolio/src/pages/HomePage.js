import React, { useRef } from 'react';
import { Container, Typography, Box, Button, Grid, Chip, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import style from './stylePages.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HomePage() {
    const sectionRef = useRef(null);
    const handleScrollToSection = () => {    
        if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <Box className = {style.cover}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component="p" variant="body1" className = {style.h1Cover}>
                        Hey there! My name is
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component="h1" variant="h1" className = {style.h1Cover}>
                        Daniela Garcia
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component="p" variant="body1" className = {style.h1Cover}>
                        <TypeAnimation
                            sequence={[
                                'and I am a Software Engineer', 3000,
                                'and I am a Organizational Psychologist', 3000,
                                'and I am a UX/UI Designer', 3000,     
                                'and I am a Photographer', 3000,
                            ]}
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                            deletionSpeed={40}
                            className = {style.typeAnimation}
                        />
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', marginBottom: '20px' }}>
                        <a href="mailto:dngarcia@seas.upenn.edu" target="_blank" className={style.coverIcon}>
                            <img src={require("../images/mail_icon_2.png")} alt="Mail" width="40px" />
                        </a>
                        <a href="https://github.com/danielagarcia9" target="_blank" className={style.coverIcon}>
                            <img src={require("../images/github_icon_2.png")} alt="Github" width="40px" />
                        </a>
                        <a href="https://www.linkedin.com/in/danielagarcia9/?locale=en_US" target="_blank" className={style.coverIcon}>
                            <img src={require("../images/linkedin_icon_2.png")} alt="Linkedin" width="40px" />
                        </a>
                        <a href="https://steamcommunity.com/id/danielagarcia9/" target="_blank" className={style.coverIcon}>
                            <img src={require("../images/steam_icon_2.png")} alt="Steam" width="40px" />
                        </a>
                    </Container>
                </Grid>
                

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop:'30px' }}>
                    <ExpandMoreIcon onClick={handleScrollToSection} className={style.expandIcon} sx={{ fontSize: 80 }} />
                </Grid>
            </Grid>
        </Box>

        <Container ref={sectionRef} className='about' id='about' sx={{ paddingTop: '40px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9} 
                    sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', order: { xs: 2, md: 1 }}}>
                    <Container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h1>About me</h1>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla 
                                urna porttitor rhoncus dolor. Sagittis id consectetur purus ut. Habitant morbi 
                                tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis 
                                viverra nibh cras pulvinar mattis nunc. Cursus vitae congue mauris rhoncus 
                                aenean vel. Tellus id interdum velit laoreet id donec ultrices tincidunt. 
                                Suspendisse faucibus interdum posuere lorem ipsum. A erat nam at lectus urna 
                                duis. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. In 
                                nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. 
                                Pharetra sit amet aliquam id diam maecenas ultricies mi. Non curabitur gravida 
                                arcu ac tortor dignissim convallis aenean. Pretium vulputate sapien nec sagittis 
                                aliquam. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. 
                                Proin fermentum leo vel orci. Justo donec enim diam vulputate ut pharetra.
                            </p>
                        </Grid>
                    </Container>
                </Grid>

                <Grid item xs={12} md={3} 
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 }, marginTop: { xs: '20px', md: '0' }}}>
                    <img
                        src={require("../images/profilepic.jpg")}
                        alt="Daniela Garcia"
                        width="300px"
                        height="300px"
                        style={{ borderRadius: '50%' }}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
                <Button variant="contained" component={Link} to="/projects">
                    Check out my projects
                </Button>
                <Button variant="contained" component={Link} to="#projects">
                    Download my CV
                </Button>
            </Grid>
        </Container>

        <Container sx={{ paddingBottom: '20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Container>
                        <h1>Skills</h1>
                        <Divider />
                    </Container> 
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Container>
                        <h4 style={{ textAlign: 'center' }}>Programming languages: </h4>
                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <i className="devicon-c-plain" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-java-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-javascript-plain" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-python-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                        </Container>
                    </Container>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <h4 style={{ textAlign: 'center' }}>Web Development:</h4>
                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <i className="devicon-html5-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-css3-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-react-original-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />                        
                            <i className="devicon-nodejs-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                        </Container>
                    </Container>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <h4 style={{ textAlign: 'center' }}>Databases:</h4>
                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <i className="devicon-mysql-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-mongodb-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-neo4j-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                        </Container>
                    </Container>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <h4 style={{ textAlign: 'center' }}>Design Tools:</h4>
                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <i className="devicon-figma-plain" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-illustrator-plain" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-photoshop-plain" style={{ fontSize: '50px', paddingRight: '5px' }} />
                        </Container>
                    </Container>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <h4 style={{ textAlign: 'center' }}>Cloud & Infrastructure:</h4>
                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <i className="devicon-amazonwebservices-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-docker-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                        </Container>
                    </Container>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <h4 style={{ textAlign: 'center' }}>General Tools:</h4>
                        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <i className="devicon-git-plain-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-github-original-wordmark" style={{ fontSize: '50px', paddingRight: '5px' }} />
                            <i className="devicon-latex-original" style={{ fontSize: '50px', paddingRight: '5px' }} />
                        </Container>
                    </Container>
                </Grid>
            </Grid>
        </Container>

        <Container sx={{ paddingBottom: '60px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}
                sx={{ display: 'flex', flexDirection: 'column', order: { xs: 2, md: 1 }}}>
                    <Container>
                        <h1>Education</h1>
                        <Divider />
                        <Box sx={{ paddingTop: '20px' }}>
                            <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                                <Grid item xs={1} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src={require("../images/Penn.png")}
                                        alt="UPenn"
                                        width="35px"
                                        height="40px"
                                    />
                                </Grid>
                                <Grid item xs={11} md={11}>
                                    <h4 style={{ margin: 0 }}>Master in Computer and Information Technology</h4>
                                    <p style={{ margin: 0 }}>School of Engineering and Applied Science, University of Pennsylvania</p>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={1} md={1} sx={{ display: 'flex',justifyContent: 'center' }}>
                                    <img
                                        src={require("../images/UC.png")}
                                        alt="UPenn"
                                        width="50px"
                                        height="50px"
                                    />
                                </Grid>
                                <Grid item xs={11} md={11}>
                                    <h4 style={{ margin: 0 }}>B.S. in Psychology, Master in Industrial and Organizational Psychology</h4>
                                    <p style={{ margin: 0 }}>Pontificia Universidad Católica de Chile</p>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={5}
                sx={{ display: 'flex', flexDirection: 'column', order: { xs: 2, md: 1 }}}>
                    <Container>
                        <h1>Interests</h1>
                        <Divider />
                        <Box sx={{ paddingTop: '20px', display: 'flex', justifyContent: 'left', gap: '8px', flexWrap: 'wrap' }}>
                            {INTERESTS.map((INTERESTS, index) => (
                                <Chip  
                                    key={index} 
                                    label={INTERESTS} 
                                    variant="outlined" 
                                    color="primary"
                                />
                            ))}    
                        </Box>
                        
                    </Container>
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

const INTERESTS = [
    "Technology", "UX/UI Design", "Photography", "Travelling", "Fine Arts", "Literature", "Coffee!"
]