const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bella Application Version 2');
});

app.listen(PORT, () => {
    console.log(`Bella application is running on port ${PORT}`);
});