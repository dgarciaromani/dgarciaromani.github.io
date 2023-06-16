import React from "react";
import { Container, Box, Button, Grid, TextField, Divider } from '@mui/material';

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <Box>
            <Container>
                <h1>Contact me!</h1>
                <Divider />
                <p>Let's connect! Whether you have a project in mind, want to discuss a potential partnership, or just want to chat, I'd love to hear from you. Don't hesitate to drop me a message using the contact form below or connect with me through my social media links. Looking forward to hearing from you!</p>
            </Container>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField 
                                id="name" 
                                label="Your name" 
                                variant="outlined" 
                                value={name}
                                color="secondary"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField 
                                id="mail" 
                                label="Your email" 
                                variant="outlined" 
                                value={email}
                                color="secondary"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField 
                                id="message" 
                                label="Your message" 
                                variant="outlined" 
                                multiline 
                                rows={4} 
                                value={message}
                                color="secondary"
                                onChange={(e) => setMessage(e.target.value)}
                                />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" variant="contained">
                            Send message
                        </Button>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
}