import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, CardContent, CardMedia, CardActions, Typography, Box, Button, Divider, Chip } from '@mui/material';

export default function ProjectsCard({data}) {
    return (
        <Container>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '40px', gap: '20px', maxWidth: '345' }}>
                {data.map((data) => (
                    <Card key={data.id} variant="outlined" sx={{ width: 328, height: 'auto', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                                component="img"
                                height="140px"
                                image={data.image}
                                alt={data.title}
                            />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: '0' }}>
                            <Typography variant="h5" component="div" sx={{  color: 'background.default', fontWeight: 'bold', textAlign: 'center' }}>
                                {data.title}
                            </Typography>
                            <Divider sx={{ width: '100%', margin: '10px 0' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                {data.tags.map((tag, index) => (
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
                            <Typography variant="body2" color="background.default">
                                {data.preview}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginTop: 'auto', justifyContent: 'center' }}>
                            <Link to={`/projects/${data.id}`}>
                                <Button size="small">Learn More</Button>
                            </Link>
                            {data.link ? (
                                <Link to={`${data.link}`} target="_blank" rel="noopener noreferrer">
                                    <Button size="small">
                                        {data.tags.includes("Figma") ? "Prototype" : "Code"}
                                    </Button>
                                </Link>
                                ) : (
                                <Button size="small" disabled>
                                    Code
                                </Button>
                            )}
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
}