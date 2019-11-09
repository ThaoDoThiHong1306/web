const express = require('express')
const app = express()
const port = 3000

app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/ping', (req, res) => res.send({ message: 'Hello Dau!' }));

app.listen(port, () => console.log(`My server is running on port ${port}!`));