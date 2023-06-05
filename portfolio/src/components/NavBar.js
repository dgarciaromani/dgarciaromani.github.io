import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
import style from './styleComponents.module.css';

const NavText = ({ href, text, onClick }) => {
    return (
        <Typography
            variant= 'h6'
            noWrap
            style={{
                fontFamily: "'Barlow', sans-serif"
            }}>
            <NavLink
                to={href}
                className = {style.navLink}
                onClick={onClick}>
                {text}                
            </NavLink>
        </Typography>
    )
}

export default function NavBar() {
    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters style={{ display: 'flex' }}>
                    <Container style={{ flex: 1, whiteSpace: 'nowrap' }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <TypeAnimation
                                sequence={[
                                    'Daniela Garcia', 3000,
                                    'Software Engineer', 2000,                                
                                    '', 500,
                                ]}
                                speed={50}
                                cursor={true}
                                repeat={Infinity}
                                deletionSpeed={40}
                                className = {style.typeAnimation}
                            />
                        </a>
                    </Container>       
                    <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <NavText href='/' text='About' />
                        <NavText href='/projects' text='Projects' />
                        <NavText href='/contact' text='Contact' />
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    );
}