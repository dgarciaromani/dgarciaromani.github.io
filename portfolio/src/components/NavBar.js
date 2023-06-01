import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const NavText = ({ href, text }) => {
    return (
        <Typography
            variant= 'h6'
            noWrap
            className = {style.navText}>
            <NavLink
                to={href}
                className = {style.navLink}>
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
                    <TypeAnimation
                        sequence={[
                            'Developer =', 500,
                            'Developer = Daniela Garcia;', 500,
                            '', 500,
                        ]}
                        speed={50}
                        cursor={true}
                        repeat={Infinity}
                        deletionSpeed={40}
                        className = {style.typeAnimation}
                    />
                </Container>       
                <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavText href='#projects' text='Projects' />
                    <NavText href='#about' text='About' />
                    <NavText href='#contact' text='Contact' />
                </Container>
            </Toolbar>
        </Container>
        </AppBar>
    );
}