const { EventEmitter } = require('events');
const LISTEN = 'listen';

const server = new EventEmitter();
server.emit(LISTEN, 123, 7587); // No handler yet

server.on(LISTEN, (host, port) => {
    console.log(`Server listen on: ${host}:${port}`);
});

setImmediate(() => {
    server.on(LISTEN, () => {
        console.log('Listen...');
    });
});

setTimeout(() => {
    // const listeners = server.listeners(LISTEN);
    // server.removeListener(LISTEN, listeners[1]);
    server.emit(LISTEN, '127.0.0.1', 3001);
}, 1000);

server.emit(LISTEN, 'http:\\localhost', 3000);