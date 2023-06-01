import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          backgroundColor: '#b0bec5',
          marginTop: 'auto',
          bottom: 0,
          width: '100%',
          borderTop: 0,
        }}>

        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="body1">
            Coded and designed by Daniela Garcia
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}