import * as React from 'react';
import { useState } from 'react';
import { Card, Container, CardContent, CardMedia, CardActions, Typography, Box, Button, Divider, Chip } from '@mui/material';

export default function ProjectsCard({data}) {
    return (
        <Container>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '40px', gap: '20px' }}>
                {data.map((data) => (
                    <Card variant="outlined" sx={{ width: 300, height: 'auto' }}>

                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                {data.title}
                            </Typography>
                            <CardMedia
                                component="img"
                                height="190"
                                image={data.image}
                                alt={data.title}
                            />
                            <Divider sx={{ width: '100%', margin: '10px 0' }} />
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                {data.tags.map((tag, index) => (
                                <Chip key={index} label={tag} variant="outlined" color="primary" />
                                ))}
                            </Box>
                            <Divider sx={{ width: '100%', margin: '10px 0' }} />
                        </CardContent>

                        <CardActions style={{ justifyContent: "center" }}>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Container>
    );
}




/*
    const [selectedCard, setSelectedCard] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setDialogOpen(true);
    };

---

{data.map((drinks) => (
                <ButtonBase key={drinks.idDrink} onClick={() => handleCardClick(drinks)}>
                    <Card sx={{ width: 200, margin: '10px' }}>
                    <CardMedia
                        sx={{ width: '200px', height: '200px', padding: '10px', margin: 'auto' }}
                        component="img"
                        src="img"
                        height="150"
                        image={drinks.strDrinkThumb}
                        />
                        <CardContent sx={{ padding: '10px' }}>
                            <Typography gutterBottom variant="h6">
                            {drinks.strDrink}
                            </Typography>
                        </CardContent>
                    </Card>
                </ButtonBase>
                ))}
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                {selectedCard && (
                    <>
                    <Card sx={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
                        <CardMedia
                            sx={{ width: '300px', height: '300px', margin: 'auto', padding: '10px' }}
                            component="img"
                            src="img"
                            height="300"
                            image={selectedCard.strDrinkThumb}
                        />

                        <CardContent sx={{ padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography gutterBottom variant="h5">
                                {selectedCard.strDrink}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p><b>Type:</b> {selectedCard.strAlcoholic}</p>
                                <p><b>Ingredients:</b> {ingredients.join(', ')}.</p>
                                <p><b>Instructions:</b> {selectedCard.strInstructions}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                    </>
                )}
                </Dialog>
*/