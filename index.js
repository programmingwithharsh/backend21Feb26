let express = require("express");
const app = express();
const cors = require('cors');

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

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

app.listen(3000);