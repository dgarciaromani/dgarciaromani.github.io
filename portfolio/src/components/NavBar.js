import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'

const typingDelay = 100; // Delay between each character typing
const resetInterval = 3000; // Reset animation every 3 seconds

const NavText = ({ href, text, isMain }) => {
    const [displayText, setDisplayText] = useState('');
    const fullText = text;

  useEffect(() => {
    let timeout;
    let interval;

    const type = (index) => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        timeout = setTimeout(() => type(index + 1), typingDelay);
      } else {
        interval = setInterval(() => {
          setDisplayText('');
          clearTimeout(timeout);
          setTimeout(() => type(0), typingDelay);
        }, resetInterval);
      }
    };

    if (isMain) {
      type(0);
    } else {
      setDisplayText(fullText);
    }

    return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
  }, [isMain, fullText]);
    
    return (
        <Typography
            variant={isMain ? 'h5' : 'h7'}
            noWrap
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
                {displayText}
            </NavLink>
            {isMain && (
                <span
                    className={styles.cursor}
                ></span>
      )}
        </Typography>
    )
}

export default function NavBar() {
  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
            <Container style={{ flex: 1 }}>
                <NavText href='/' text="Developer = DanielaGarcia;" isMain />
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