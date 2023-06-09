import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, CardContent, CardMedia, CardActions, Typography, Box, Button, Divider, Chip } from '@mui/material';

export default function ProjectsCard({data}) {
    const tallestCardHeight = Math.max(...data.map((data) => data.tags.length + 240 ));
    return (
        <Container>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '40px', gap: '20px', maxWidth: '345' }}>
                {data.map((data) => (
                    <Card key={data.id} variant="outlined" sx={{ width: 300, height: 'auto' }}>
                        <CardMedia
                                component="img"
                                height="140px"
                                image={data.image}
                                alt={data.title}
                            />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'top', paddingBottom: '0', height: tallestCardHeight }}>
                            <Typography variant="h5" component="div" sx={{  color: 'background.default', fontWeight: 'bold' }}>
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
                        <CardActions style={{ justifyContent: 'center' }}>
                            <Link to={`/projects/${data.id}`}>
                                <Button size="small">Learn More</Button>
                            </Link>
                            <Link to={`${data.link}`} target="_blank" rel="noopener noreferrer">
                                <Button size="small">
                                    {data.tags.includes("UX/UI") ? "Prototype" : "Code"}
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
}