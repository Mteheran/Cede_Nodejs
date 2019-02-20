const { Readable } = require('stream');

// const inStream = new Readable();

// const alphabet = 'ABCDEFGHIJKLMOPQRSTXYZ';
// inStream.push(alphabet);
// inStream.push(null);

const inStream = new Readable({
    read(size) {
        setTimeout(()=> {
            if(this.charCode > 90) {
                this.push(null);
            }

            this.push(String.fromCharCode(this.charCode++));
        }, 100);
    }
})

inStream.charCode = 65;
inStream.pipe(process.stdout);

process.on('exit', () => {
    console.log(`\n ${inStream.charCode}`);
});