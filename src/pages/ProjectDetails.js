import { useParams } from 'react-router-dom';
import { Box, Container, Divider, Chip, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/ProjectsInfo';
import PhotoCarousel from '../components/Carousel';

export default function ProjectDetails() {
    const { id } = useParams(); 
    const project = PROJECTS.find((project) => project.id === parseInt(id));

    function goBack() {
        window.history.back();
    }

    return (
        <Box sx={{ textAlign: 'center' }} >
            <Container>
                <h1 style={{marginBottom: '0'}}>{project.title}</h1>
                <h2 style={{marginTop: '0'}}>({project.year})</h2>
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
                <Container sx={{ textAlign: 'left'}}>
                    {project.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </Container>
            </Container>

            <Container>
                <PhotoCarousel data={project.photos} />
            </Container>

            <Container sx={{padding: '20px'}}>
                <Button onClick={goBack}>Go Back</Button>
                {project.link ? (
                    <Link to={`${project.link}`} target="_blank" rel="noopener noreferrer">
                        <Button>
                            {project.tags.includes("UX/UI Design") ? "Check out the prototype" : "Check out the code"}
                        </Button>
                    </Link>
                    ) : (
                    <Button disabled>
                        Code not available
                    </Button>
                )}
            </Container> 
        </Box>
    );
};