const fs = require('fs');
const path = require('path');


process.on('message', (filepath) => {
    const readable = fs.createReadStream(path.join(__dirname, filepath), { encoding: 'utf8', highWaterMark: 16 * 1024 });
    readable.on('data', (chunck) => {
        console.log('sending chunck..')
        process.send(chunck);
    });

    readable.on('end', () => {
        console.log('file ended')
        process.send('END');
    });
});
