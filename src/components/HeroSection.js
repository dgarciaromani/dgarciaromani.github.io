import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from '../components/styleComponents.module.css';
import { NAME, SOCIALMEDIA } from '../data/AboutInfo';

export default function HeroSection({ handleScrollToSection }) {
    return (
        <Box className = {style.cover}>
            <Grid container spacing={2}>
                <Grid item xs={12} className = {style.centered}>
                    <Typography component="p" variant="h6" className = {style.lettersCover}>
                        Hey there! My name is
                    </Typography>
                </Grid>
                
                <Grid item xs={12} className = {style.centered}>
                    <Typography component="h1" variant="h1" className = {style.mainCover} sx={{fontFamily: '"Barlow", sans-serif'}}>
                        {NAME}
                    </Typography>
                </Grid>

                <Grid item xs={12} className = {style.centered}>
                    <Typography component="p" variant="h6" className = {style.lettersCover}>
                        <TypeAnimation
                            sequence={[
                                'and I am a Software Engineer', 3000,
                                'and I am an Organizational Psychologist', 3000,
                                'and I am a Consultant', 3000,
                                'and I am a UX/UI Designer', 3000,  
                                'and I am a Programmer', 3000,   
                                'and I am a Photographer', 3000,
                            ]}
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                            deletionSpeed={40}
                        />
                    </Typography>
                </Grid>

                <Grid item xs={12} className = {style.centered}>
                    <Container sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', marginBottom: '20px' }}>
                        {SOCIALMEDIA.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={style.coverIcon}>
                                <img src={item.srcBlack} alt={item.name} width="40px" onMouseEnter={(e) => { e.target.src = item.srcGreen; }} onMouseLeave={(e) => { e.target.src = item.srcBlack; }}/>
                            </a>
                        ))}
                    </Container>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop:'30px' }}>
                    <ExpandMoreIcon 
                        onClick={handleScrollToSection} 
                        className={style.expandIcon} 
                        sx={{ fontSize: 80 }} 
                    />
                </Grid>
            </Grid>
        </Box>
    );
}