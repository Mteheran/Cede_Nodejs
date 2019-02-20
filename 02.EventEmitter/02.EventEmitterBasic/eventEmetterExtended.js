const { EventEmitter } = require('events');

class HttpServer extends EventEmitter {
    constructor(handler) {
        super();
        this.handler = handler;
        this.once('listen', () => {
            console.log('Listen...');
        });
        this.setMaxListeners(12)
        this.on('request', handler);
        console.log(this.listenerCount('request'));
    }

    listen() {
        this.emit('listen');
    }

    request(body) {
        this.emit('request', 'POST', body);
    }
}


const handler = (method, body) => {
    console.log(`[${method}]:${body}`);
};

const server = new HttpServer(handler);
server.listen();
server.request('{msg: OK, status: 200}');