const express = require('express');
const sgMail = require('@sendgrid/mail');
const app = express();
const port = process.env.PORT || 3000;

// Set up SendGrid API key
sgMail.setApiKey("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");

// Middleware to set CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow all origins (not recommended for production)
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(express.static(__dirname)); // Serve files from the current directory


// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/send', (req, res) => {
  console.log('Received a POST request to /send');

  const { name, email, message } = req.body;

  const msg = {
    to: 'charlieismynamewhichischarlie@gmail.com', // Update with your actual email address
    from: 'runserver17@gmail.com', // Update with your SendGrid verified sender email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  sgMail.send(msg)
    .then(() => {
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch(error => {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    });
});