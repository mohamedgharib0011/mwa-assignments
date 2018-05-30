/**
 * Create a web server that's going to send a response of big image (bigger than 300MB) to any client that sends a request 
 * to your specified server:port. Use the best way for performance.
 * (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see 
 * differences)
 */

const fs = require('fs');
const server = require('http').createServer();



/** 
 * here we have two solutions one using buffering and the other using streaming, 
 * you can switch between both of them to see the difference
 */



/* server.on('request', (req, res) => {
      fs.readFile('./large_photo.jpg', (err, data) => {
        if (err) throw err;
    
        res.end(data);
      });

}).listen(8000,()=>{console.log('[Buffer Example] server start listing on port 8000 ')}); */


server.on('request', (req, res) => {
    const src = fs.createReadStream('./large_photo.jpg');
    src.pipe(res);
}).listen(8000, () => { console.log('[Stream Example] server start listing on port 8000 ') });

