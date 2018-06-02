/**
 * This file will work as a child process when it called from the main process exercise2.js, 
 * and resposible for reading the file as stream and send each chunck to the main process until the file end.
 */
const fs = require('fs');
const path = require('path');

// the entry point
process.on('message', (filepath) => {
    // reading the file using stream
    const readable = fs.createReadStream(path.join(__dirname, filepath), { encoding: 'utf8', highWaterMark: 16 * 1024 });

    // listen on data to read the file chunck by chunck
    readable.on('data', (chunck) => {
        console.log('sending chunck..')
        process.send(chunck);
    });

    // when the file ended just send 'END' to main process
    readable.on('end', () => {
        console.log('file ended')
        process.send('END');
    });
});
