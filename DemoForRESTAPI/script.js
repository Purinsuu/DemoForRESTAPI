const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());

const customers = [
    {title: 'George', id: 1},
    {title: 'Josh', id: 2},
    {title: 'Tyler', id: 3},
    {title: 'Alice', id: 4},
    {title: 'Candice', id: 5}
]

app.get('/', (req, res) => {
    res.send('Welcome to REST API!');
});