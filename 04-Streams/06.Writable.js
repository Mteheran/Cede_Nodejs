const { Writable } = require('stream');

const outStream = new Writable({
    write(chunk, encoding, cb) {
        console.log(chunk.toString());
        cb();
    }
});

process.stdin.pipe(outStream);