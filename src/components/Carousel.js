import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Container } from '@mui/material'

export default function PhotoCarousel({data}) {
  return (
    <Box>
        <Carousel>
                {data.map((photo, index) => (
                    <Container key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content' }}>
                        <img
                            src={photo.image}
                            alt={photo.label}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Container>
                ))}
        </Carousel>
    </Box>
  );
}