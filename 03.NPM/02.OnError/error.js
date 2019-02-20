const { EventEmitter } = require('events');

const server = new EventEmitter();
server.on('error', (err) => {
    console.log(`Error appears ${err.message}`);
    process.exit(1);
});

try {
    readfile();
} catch (err) {
    server.emit('error', err);
}