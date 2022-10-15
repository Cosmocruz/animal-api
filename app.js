const express = require('express');
const startup = require('./src/startup');

const app = express();

app.use(express.json());
startup.init(app);

app.listen('3000', () => {
    console.log('Server is up and waitin to serve you');
});
