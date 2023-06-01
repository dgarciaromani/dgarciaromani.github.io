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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sagittis id consectetur purus ut. Habitant morbi tristique senectus et netus et malesuada fames ac. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Cursus vitae congue mauris rhoncus aenean vel. Tellus id interdum velit laoreet id donec ultrices tincidunt. Suspendisse faucibus interdum posuere lorem ipsum. A erat nam at lectus urna duis. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pharetra sit amet aliquam id diam maecenas ultricies mi. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Pretium vulputate sapien nec sagittis aliquam. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Proin fermentum leo vel orci. Justo donec enim diam vulputate ut pharetra.
                            Tortor id aliquet lectus proin. Imperdiet massa tincidunt nunc pulvinar sapien et. Neque egestas congue quisque egestas diam in arcu. At elementum eu facilisis sed odio morbi quis commodo. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Aliquam faucibus purus in massa tempor nec. Tempor orci eu lobortis elementum nibh tellus molestie. Egestas diam in arcu cursus euismod quis. At in tellus integer feugiat. In hendrerit gravida rutrum quisque non tellus orci. Diam sollicitudin tempor id eu nisl nunc. Ridiculus mus mauris vitae ultricies leo integer malesuada.
                            Vitae justo eget magna fermentum iaculis. Egestas dui id ornare arcu odio ut sem. Amet consectetur adipiscing elit pellentesque habitant. Orci sagittis eu volutpat odio facilisis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Venenatis a condimentum vitae sapien. Arcu ac tortor dignissim convallis aenean et tortor at. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Netus et malesuada fames ac turpis. Ut eu sem integer vitae justo.
                            Dolor magna eget est lorem ipsum dolor. Sed sed risus pretium quam. Viverra accumsan in nisl nisi. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Ultrices dui sapien eget mi proin sed libero enim. In ante metus dictum at tempor commodo. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Elit eget gravida cum sociis natoque penatibus. Malesuada fames ac turpis egestas sed tempus urna. Montes nascetur ridiculus mus mauris vitae.
                            Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Et egestas quis ipsum suspendisse ultrices gravida dictum. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Pellentesque massa placerat duis ultricies lacus. Cursus in hac habitasse platea dictumst quisque sagittis. Ullamcorper sit amet risus nullam eget felis eget. Euismod lacinia at quis risus sed vulputate odio ut enim. Eu facilisis sed odio morbi quis commodo odio aenean sed. Sit amet consectetur adipiscing elit ut aliquam purus sit. Eget duis at tellus at urna condimentum mattis. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Ut porttitor leo a diam sollicitudin tempor id. Sit amet dictum sit amet justo donec enim diam. In ante metus dictum at tempor commodo ullamcorper a. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Ipsum dolor sit amet consectetur.
                            Semper viverra nam libero justo laoreet sit amet. Porttitor massa id neque aliquam vestibulum morbi. Vel pretium lectus quam id leo in vitae turpis. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Morbi leo urna molestie at elementum. Turpis massa tincidunt dui ut. Vitae sapien pellentesque habitant morbi. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Orci dapibus ultrices in iaculis nunc. Rutrum quisque non tellus orci ac auctor augue. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.

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