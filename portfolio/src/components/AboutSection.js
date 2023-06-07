import React from 'react';
import { Container, Box, Button, Grid, Chip, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import { NAME, PHOTO, DESCRIPTION, CV, SKILLS, EDUCATION, INTERESTS } from '../data/AboutInfo';

export default function AboutSection({ sectionRef }) {
    return (
        <Box ref={sectionRef}>
            <Container sx={{ paddingTop: '40px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9} 
                        sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', order: { xs: 2, md: 1 }}}>
                        <Container>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <h1>About me</h1>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left' }}>
                                <p>{DESCRIPTION}</p>
                            </Grid>
                        </Container>
                    </Grid>

                    <Grid item xs={12} md={3} 
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, md: 2 }, marginTop: { xs: '20px', md: '0' }}}>
                        <img
                            src={PHOTO}
                            alt={NAME}
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
                    <Button variant="contained" component="a" href={CV} target="_blank" rel="noopener noreferrer">
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
                    {Object.entries(SKILLS).map(([category, icons]) => (
                        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }} key={category}>
                            <Container>
                                <h4 style={{ textAlign: 'center' }}>{category}:</h4>
                                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                                    {icons.map((icon) => (
                                        <i className={icon} style={{ fontSize: '50px', paddingRight: '5px' }} key={icon} />
                                    ))}
                                </Container>
                            </Container>
                        </Grid>
                    ))}
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
                            {EDUCATION.map((item, index) => (
                                <Grid container spacing={2} key={index} sx={{ marginBottom: '10px' }}>
                                    <Grid item xs={1} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <img
                                            src={item.logo}
                                            alt="University logo"
                                            width={item.srcWidth ? item.srcWidth : "40px"}
                                            height={item.srcHeight ? item.srcHeight : "40px"}
                                        />
                                    </Grid>
                                    <Grid item xs={11} md={11}>
                                        <h4 style={{ margin: 0 }}>{item.degree}</h4>
                                        <p style={{ margin: 0 }}>{item.university}</p>
                                    </Grid>
                                </Grid>
                            ))}
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
        </Box>
    );
}