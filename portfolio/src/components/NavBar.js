import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavText = ({ href, text, isMain, className }) => {
    
    return (
        <Typography
            variant={isMain ? 'h5' : 'h7'}
            noWrap
            className={className}
            style={{
                marginRight: '10px',
                fontWeight: 700,
                fontFamily: isMain ? "Alumni Sans" : "'Barlow', sans-serif"
            }}>
            <NavLink
                to={href}
                style={{
                    color: 'inherit',
                    textDecoration: 'none',
                }}>
                {text}
            </NavLink>
            {isMain && <span className={styles.cursor}></span>}
        </Typography>
    )
}

export default function NavBar() {

    const [resetAnimation, setResetAnimation] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setResetAnimation(true);

            setTimeout(() => {
            setResetAnimation(false);
            }, 200);
        }, 5000);
    
        return () => {
            clearInterval(interval);
        };
      }, []);
    

  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
            <Container style={{ flex: 1 }}>
                <NavText href='/' className={`${styles.typed} ${resetAnimation ? styles.resetAnimation : ''}`} text="Developer = DanielaGarcia;" isMain />
            </Container>       
            <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <NavText href='/projects' text='Projects' />
                <NavText href='/about' text='About' />
                <NavText href='/contact' text='Contact' />
            </Container>          
        </Toolbar>
      </Container>
    </AppBar>
  );
}