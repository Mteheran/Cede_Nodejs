const { Transform } = require('stream');

const zip = new Transform({
    transform(chunk, encoding, cb) {
        this.push(chunk.toString().toUpperCase());
        cb();
    }
});

process.stdin.pipe(zip).pipe(process.stdout);