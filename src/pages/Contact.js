import React, { useState, useEffect } from 'react';
import { Container, Box, Divider, Typography, Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import { SOCIALMEDIA } from '../data/AboutInfo';

function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
    <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
    >
    {value === index && (
        <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
        </Box>
    )}
    </Box>
);
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Contact() {
    const [value, setValue] = React.useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box>
            <Container>
                <h1>Contact me!</h1>
                <Divider />
                <Typography variant="body1" sx={{paddingTop: '20px', paddingBottom: '15px'}}>
                    Let's connect! Whether you have a project in mind, want to discuss a potential partnership, or just want to chat, I'd love to hear from you. Don't hesitate to drop me a message through my social media links. Looking forward to hearing from you!
                </Typography>
            </Container>

            <Container sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '50px', marginBottom: '50px' }}>   
                {SOCIALMEDIA.map((item, index) => (
                    <Box key={index}>
                        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '0' }}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={item.srcWhite} 
                                    alt={item.name} 
                                    width={isMobile ? '80px' : '120px'}
                                    onMouseEnter={(e) => { e.target.src = item.srcGreen; }} 
                                    onMouseLeave={(e) => { e.target.src = item.srcWhite; }}
                                />
                            </a>
                            <Typography variant={isMobile ? 'h6' : 'h5'} component="h6" sx={{  color: 'text.primary', fontWeight: 'bold', textAlign: 'center' }}>
                                {item.name}
                            </Typography>
                        </Container>
                    </Box>
                ))}
            </Container>

            <Container>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'text.primary' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="location tabs">
                            <Tab label="Where I am now" {...a11yProps(0)} sx={{ backgroundColor: value === 0 ? 'secondary.main' : 'inherit' }}/>
                            <Tab label="Where I am from" {...a11yProps(1)} sx={{ backgroundColor: value === 1 ? 'secondary.main' : 'inherit' }}/>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Container sx={{paddingBottom: '20px'}}>
                            I currently live in Philadelphia, a vibrant city with its own unique charm. However, I am open to the possibility of relocating in the future. I am always open to considering new opportunities that may come my way.
                        </Container>
                        <Container sx={{ display: 'flex', justifyContent: 'center'}}>
                            <iframe title="Location Map Now" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564805.0121334733!2d-76.43639937654387!3d40.002644294463416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1687377712367!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Container sx={{paddingBottom: '20px'}}>
                            I was born in Chile, a captivating country known for its breathtaking landscapes and esteemed wine culture. Santiago was my home for many years, and I always enjoy going back from time to time.
                        </Container>
                        <Container sx={{ display: 'flex', justifyContent: 'center'}}>
                            <iframe title="Location Map Santiago" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6815976.696134556!2d-75.90327993469626!3d-33.472392498358765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Santiago%20Metropolitan%20Region%2C%20Chile!5e0!3m2!1sen!2sus!4v1687377796985!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Container>
                    </TabPanel>
                </Box>
            </Container>           
        </Box>
    );
}