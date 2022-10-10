const express = require('express');
const animal = require('./src/routes/animal.routes');

const app = express();

app.use(express.json());

app.use('/animal', animal);

app.listen('3000', () => {
    console.log('Server is up and waitin to serve you');
});
