const { createReadStream, createWriteStream } = require('fs');
const { createGzip } = require('zlib');

const read = createReadStream('VoynaMir.txt');
const write = createWriteStream('VoynaMir.zip');

read.pipe(createGzip()).pipe(write).on('finish', () => { console.log('DONE')});

