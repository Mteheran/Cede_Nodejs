const path = require('path');
const { readFile, writeFile } = require('fs');

readFile(path.join(__dirname, 'helloWorld.js'), (err, fileData) => {
    console.log(fileData.toString());
});

writeFile("D:",

)



console.log('This is the end')