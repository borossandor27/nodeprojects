const http = require('http'); //-- létrehoz egy HTTP-kiszolgálót a Node.js-ben.
const fs = require('fs'); //-- fájlrendszer kezelésére használható

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    let indexPath = '.\\02_http\\index.html';

    //console.log(indexPath);
    fs.readFile(indexPath, 'utf8', (err, content) => {
        if (err) {
            //-- Olvasási hiba esetén kiírja a hibát és nem megy tovább
            return console.error(err);
        }
        res.statusCode = 200;
        //-- sikeres olvasás esetén visszaadja az olvasott fájlt
        res.end(content);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});