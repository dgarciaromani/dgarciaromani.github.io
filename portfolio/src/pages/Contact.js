import React from "react";
import { Container, Typography, Box, Button, Grid, TextField, Divider } from '@mui/material';

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
        <Box sx={{ marginBottom: '40px' }}>
            <Container>
                <h1>Contact me!</h1>
                <Divider />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Container>
            <Container>

                <Grid container spacing={2} sx={{marginBottom: '10px'}}>
                    <Grid item xs={1} md={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>               
                        <a href="mailto:dngarcia@seas.upenn.edu" target="_blank">
                            <img src={require("../images/mail_icon.png")} alt="Mail" width="60px" />
                        </a>
                    </Grid>
                    <Grid item xs={11} md={11} sx={{ display: 'flex', alignItems: 'center' }}>
                        <h2>dngarcia@seas.upenn.edu</h2>
                    </Grid>
                </Grid>

                
            </Container>
            <Container>
                <Divider />
                <h3>Or send me a message: </h3>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField 
                                id="name" 
                                label="Your name" 
                                variant="outlined" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField 
                                id="mail" 
                                label="Your email" 
                                variant="outlined" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </Grid>
                        <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField 
                                id="message" 
                                label="Your message" 
                                variant="outlined" 
                                multiline 
                                rows={6} 
                                value={message}
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