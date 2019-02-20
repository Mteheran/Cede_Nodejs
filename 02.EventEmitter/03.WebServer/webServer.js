const { Server } = require('http');

const server = new Server((req, res) => {
    console.log('Request is commig....')
    res.write('Hello world!');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Server listen on localhost:3000');
});