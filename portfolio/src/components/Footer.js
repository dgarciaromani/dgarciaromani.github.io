import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { NAME, SOCIALMEDIA } from '../data/AboutInfo';

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
            {SOCIALMEDIA.map((item, index) => (
                <a href={item.link} target="_blank">
                    <img src={item.srcWhite} alt={item.name} width="50px" />
                </a>
            ))}
          </Container>

          <Typography variant="body1" color="white">
            Coded and designed by {NAME}
          </Typography>
          
          <Typography variant="body2" color="white">
            {'Copyright © '}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}