// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const path = require('path');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/submit-form', async (req, res) => {
//     const { firstName, lastName, email, phoneNumber } = req.body;

//     try {
//         const client = await pool.connect();
//         const query = 'INSERT INTO user_details (first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4)';
//         await client.query(query, [firstName, lastName, email, phoneNumber]);
//         client.release();

//         res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     } catch (error) {
//         console.error('Error executing query', error);
//         res.status(500).send('Internal server error');
//     }
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const path = require('path');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
// });

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/submit-form', async (req, res) => {
//     const { firstName, lastName, email, phoneNumber } = req.body;

//     try {
//         const client = await pool.connect();
//         const query = 'INSERT INTO user_details (first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4)';
//         await client.query(query, [firstName, lastName, email, phoneNumber]);
//         client.release();

//         res.redirect('/');
//     } catch (error) {
//         console.error('Error executing query', error);
//         res.status(500).send('Internal server error');
//     }
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });




const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.post('/submit-form', async (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;

    try {
        const client = await pool.connect();
        const query = 'INSERT INTO user_details (first_name, last_name, email, phone_number) VALUES ($1, $2, $3, $4)';
        await client.query(query, [firstName, lastName, email, phoneNumber]);
        client.release();

        res.redirect('/index.html'); // Corrected path
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal server error');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); // Corrected path
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
