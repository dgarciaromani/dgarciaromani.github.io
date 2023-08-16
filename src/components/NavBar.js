import React, { useState, useEffect } from 'react';
import { AppBar, Container, Toolbar, Typography, Menu, MenuItem, IconButton, ListItemIcon } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
import style from './styleComponents.module.css';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import CloseIcon from '@mui/icons-material/Close';


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
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [menuIcon, setMenuIcon] = useState(<LocalCafeIcon sx={{ fontSize: 40 }} />);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuIcon(<CloseIcon sx={{ fontSize: 40 }} />);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setMenuIcon(<LocalCafeIcon sx={{ fontSize: 40 }} />);
    };

    return (
        <AppBar position='sticky' /*sx={{ boxShadow: 'none' }}*/>
            <Container maxWidth='xl'>
                <Toolbar disableGutters style={{ display: 'flex' }}>
                    <Container style={{ flex: 1, whiteSpace: 'nowrap' }}>
                        {isMobile ? (
                            <a href="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '10px'  }}>
                                <TypeAnimation
                                    sequence={[
                                        'Daniela Garcia-Romani', 3000,
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
                        ) : (
                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <TypeAnimation
                                    sequence={[
                                        'Daniela Garcia-Romani', 3000,
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
                        )}
                    </Container>  

                    <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {isMobile ? (
                        <>
                            <IconButton
                                aria-controls="menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                color="inherit"
                            >
                                {menuIcon}
                            </IconButton>
                            <Menu
                                id="menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    sx: {
                                      backgroundColor: '#383B3E',
                                    },
                                }}
                            >
                                <MenuItem onClick={handleClose} sx={{ justifyContent: 'flex-end' }}>
                                    <ListItemIcon sx={{ color: '#F5F5F5' }}>
                                        <NavText href='/' text='About' onClick={handleClose} />
                                    </ListItemIcon>
                                </MenuItem>
                                <MenuItem onClick={handleClose} sx={{ justifyContent: 'flex-end' }}>
                                    <ListItemIcon sx={{ color: '#F5F5F5' }}>
                                        <NavText href='/projects' text='Projects' onClick={handleClose} />
                                    </ListItemIcon>
                                </MenuItem>
                                <MenuItem onClick={handleClose} sx={{ justifyContent: 'flex-end' }}>
                                    <ListItemIcon sx={{ color: '#F5F5F5' }}>
                                        <NavText href='/contact' text='Contact' onClick={handleClose} />
                                    </ListItemIcon>
                                </MenuItem>
                            </Menu>
                        </>
                        ) : (
                        <>
                            <NavText href='/' text='About' />
                            <NavText href='/projects' text='Projects' />
                            <NavText href='/contact' text='Contact' />
                        </>
                        )}
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    );
}