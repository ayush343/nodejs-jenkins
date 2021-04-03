const express = require('express');
const app = express();
const port = 9999 || process.env.PORT;

app.get('/', (req, res) => {
    res.send("welcome page in container");
});
app.get('/hello', (req, res) => {
    const name = req.query.name;
    res.send('Hello ${name}');
});

app.listen(port, () => {
    console.log('Listening at port ${port}');
});