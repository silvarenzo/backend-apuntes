//const http = require('http');

import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Mi primer servidor con http')
})

server.listen(8080, ()=> {
    console.log('Server ok');
})

