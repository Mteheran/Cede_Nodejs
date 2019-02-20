const { createReadStream, createWriteStream } = require('fs');

const readableStream = createReadStream('VoynaMir.txt');
const writableStream = createWriteStream('VoynaMirCopy.txt');


readableStream.pipe(writableStream, {end: false});
readableStream.on('end', () => {
    writableStream.write('\n JoyCasino.com');
});



