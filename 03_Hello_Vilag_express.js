const express = require('express'); //-- létrehoz egy HTTP-kiszolgálót a Node.js-ben.
const path = require('path');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    let indexPath = path.join(__dirname, '02_http/index.html');
    console.log(indexPath);
    res.sendFile(indexPath);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});