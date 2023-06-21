const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `http://${process.env.HOST}`); // Frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
  
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  
    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'An error occurred while sending the email.' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ success: true, message: 'Email sent successfully.' });
      }
    });
  });

const SERVER_PORT = process.env.SERVER_PORT || 3001;
app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`);
});