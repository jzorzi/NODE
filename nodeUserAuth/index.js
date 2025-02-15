/* eslint-disable semi */
import express from 'express'
import { PORT } from './config.js';
import { UserRepository } from './user-repository.js';

const app = express()
app.use(express.json());   // utiliza el middl. express.json -> mira si tiene q transformar json

app.get('/', (req, res) => {
    res.send('<h2>Hello JC Node.js</h2>');
})

app.post('/login', (req, res) => {
    res.json({ user: 'jzorzi' })
})

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);

    try {
        const id = UserRepository.create({ username, password });
        res.send({ id });
    } catch (error) {
        res.status(400).send( error.message );
    }
})

app.post('/logout', (req, res) => {})

app.get('/protected', (req, res) => {})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

