import { Container, Typography, Box, Button, Grid, } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './stylePages.module.css';

export default function HomePage() {
    return (
        <>
        <Box className = {style.cover}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component="h1" variant="h1" className = {style.h1Cover}>
                        Hello World!
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Container style={{textAlign: 'center'}}>
                        <Typography component="p" variant="body1" className = {style.pCover}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sagittis id consectetur purus ut. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Cursus vitae congue mauris rhoncus aenean vel. Tellus id interdum velit laoreet id donec ultrices tincidunt. Suspendisse faucibus interdum posuere lorem ipsum. A erat nam at lectus urna duis. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pharetra sit amet aliquam id diam maecenas ultricies mi. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Pretium vulputate sapien nec sagittis aliquam. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Proin fermentum leo vel orci. Justo donec enim diam vulputate ut pharetra.
                        </Typography>
                    </Container>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" component={Link} to="#about">
                        About me
                    </Button>
                    <Button variant="contained" component={Link} to="#projects">
                        My projects
                    </Button>
                </Grid>
            </Grid>
        </Box>

        <Container>
            <Container>

            </Container>
        </Container>
        </>
    );
}