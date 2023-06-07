import { useParams } from 'react-router-dom';
import { Box, Container, Divider, Chip, Grid, Button, ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/ProjectsInfo';

export default function ProjectDetails() {
    const { id } = useParams(); 
    const project = PROJECTS.find((project) => project.id === parseInt(id));

    function goBack() {
        window.history.back();
    }

    return (
        <Box sx={{ textAlign: 'center' }} >
            <Container>
                <h1>{project.title}</h1>
                <Divider sx={{ width: '100%', margin: '10px 0' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        {project.tags.map((tag, index) => (
                            <Chip 
                                key={index} 
                                label={tag} 
                                variant="outlined" 
                                color="primary"
                                size="small" 
                            />
                        ))}
                    </Box>
                <Divider sx={{ width: '100%', margin: '10px 0' }} />

                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                        <Container>
                            <img src={project.image} alt={`Project ${project.id}`} width="350px" height="350px"/>
                        </Container>

                    </Grid>
                    <Grid item xs={12} md={8} sx={{ display: 'flex' }}>
                        <Container>
                            <p>{project.description}</p>
                        </Container>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <ImageList sx={{ width: '100%', gap: '1rem' }} cols={3} rowHeight='auto'>
                    {project.photos.map((photo, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`${photo}?w='auto'&h='auto'&fit=crop&auto=format`}
                                srcSet={`${photo}?w='auto'&h='auto'&fit=crop&auto=format&dpr=2 2x`}
                                alt={`${project.title}${index}`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

            </Container>

            <Container sx={{padding: '20px'}}>
                <Button onClick={goBack}>Go Back</Button>
                <Link to={`${project.link}`} target="_blank" rel="noopener noreferrer">
                    <Button>
                        {project.tags.includes("UX/UI") ? "Check out the prototype" : "Check out the code"}
                    </Button>
                </Link>
            </Container> 
        </Box>
    );
};