const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cs260', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    // other fields as needed
});

// Create User model
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(express.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// API endpoint to fetch a random quote
app.get('/api/quote', async (req, res) => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        res.json({ quote: data.content, author: data.author });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch quote' });
    }
});

// API endpoint to create a new user
app.post('/api/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        // Ensure that password is a string
        if (typeof req.body.password !== 'string') {
            return res.status(400).json({ error: 'Password must be a string' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});



// API endpoint to authenticate a user
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('User not found');
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid password');
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Login failed' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
