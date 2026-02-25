let express = require("express");
const app = express(); // create express app
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());
app.use(bodyParser.json());

// Mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/feb26')
    .then(() => console.log('Connected to Mongodb!'));

// define schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

// create model 
const User = mongoose.model('User', userSchema);

// default Routes
app.get('/', (req, res) => {
    const users = [
        {
            id: 1,
            username: "Ishani"
        },
        {
            id: 2,
            username: "Shubham"
        },
        {
            id: 3,
            username: "Ramanath"
        },
        {
            id: 4,
            username: "Parikshith"
        },
        {
            id: 5,
            username: "Pradeep"
        },
        {
            id: 6,
            username: "Rashid"
        },
        {
            id: 7,
            username: "Mohanababu"
        },
        {
            id: 8,
            username: "Dhivyapriya"
        },
        {
            id: 9,
            username: "Prudhvi"
        },
        {
            id: 10,
            username: "Ashima"
        },
        {
            id: 11,
            username: "Aravind"
        },
        {
            id: 12,
            username: "Akarsh"
        },
        {
            id: 13,
            username: "Shwetha Bandol"
        },
        {
            id: 14,
            username: "Sushma"
        },
        {
            id: 15,
            username: "Dharmikraja"
        },
        {
            id: 16,
            username: "Sweta"
        },
        {
            id: 17,
            username: "Sihi"
        }
    ]
    res.json(users);
})

// READ: Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// CREATE: Add new user
app.post('/users', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        })
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// READ: Get user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(400).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// READ: Update user by ID
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name, email: req.body.email },
            { new: true } // return new user
        )
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// DELETE: Delete user by ID
app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'user deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});