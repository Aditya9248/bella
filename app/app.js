const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Bella!');
});

app.listen(PORT, () => {
    console.log(`Bella application is running on port ${PORT}`);
});