import { Container, Typography, Box, Button, Grid, } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  box: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)),
        url(${process.env.PUBLIC_URL}/homepage.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: '100px',
    fontWeight: 'bold',
    textShadow: '2px 2px #000000',
    fontFamily: 'Alumni Sans',
  },
  p: {
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
    textShadow: '2px 2px #000000',
    fontFamily: 'Barlow',
  },
};

export default function HomePage() {
    return (
        <Box sx={styles.box}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component="h1" variant="h1" sx={styles.h1}>
                        Welcome
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container style={{textAlign: 'center'}}>
                    <Typography component="p" variant="body1" sx={styles.p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    </Container>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" component={Link} to="/search">
                        About me
                    </Button>
                    <Button variant="contained" component={Link} to="/ingredients">
                        My projects
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}