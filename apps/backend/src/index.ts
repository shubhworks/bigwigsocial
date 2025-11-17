import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://bigwigsocial.vercel.app',
        'https://bigwigsocial.com',
        'https://www.bigwigsocial.com',
    ],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Backend server is running!');
});


app.post('/api/send-email', async (req: Request, res: Response) => {

    const { firstName, lastName, email, phone, requirements } = req.body;


    if (!firstName || !lastName || !email) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // (e.g., SendGrid, Mailgun)
        auth: {
            user: process.env.EMAIL_USER, // Your Gmail address (e.g., you@gmail.com)
            pass: process.env.EMAIL_PASS, // Your Gmail "App Password"
        },
    });


    const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`, // Sender's name and email
        to: process.env.RECEIVING_EMAIL,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <hr>
      <p><strong>Requirements:</strong></p>
      <p>${requirements || 'Not provided'}</p>
    `,
    };


    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
});

// --- Start the Server ---
app.listen(port, () => {
    console.log(`Backend server listening on http://localhost:${port}`);
});