import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      {new Date().getFullYear()}
    </Typography>
  );
  }

export default function StickyFooter() {
  const theme = useTheme();
  const customColor = theme.palette.customColor.main;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: customColor,
          
          marginTop: '0',
          bottom: 0,
          width: '100%',
          borderTop: 0,
        }}>

        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Container sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px', marginBottom: '20px' }}>
            <a href="mailto:dngarcia@seas.upenn.edu" target="_blank">
              <img src={require("../images/mail_icon.png")} alt="Mail" width="50px" />
            </a>
            <a href="https://github.com/danielagarcia9" target="_blank">
              <img src={require("../images/github_icon.png")} alt="Github" width="50px" />
            </a>
            <a href="https://www.linkedin.com/in/danielagarcia9/?locale=en_US" target="_blank">
              <img src={require("../images/linkedin_icon.png")} alt="Linkedin" width="50px" />
            </a>
            <a href="https://steamcommunity.com/id/danielagarcia9/" target="_blank">
              <img src={require("../images/steam_icon.png")} alt="Steam" width="50px" />
            </a>
          </Container>
          <Typography variant="body1" color="white">
            Coded and designed by Daniela Garcia
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}