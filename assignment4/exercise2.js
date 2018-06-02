/**
 * Create a Reactive HTTP server that serves files when url query parameter is passed with the request.
 * The file path is provided in the url like that:
 * http://localhost:4000/?url=path/to/my/file.txt
 * 
 * Your logic of reading a file should be in a separate  child process.
 */

const http = require('http');
// const { Subject } = require('rxjs');
const { fork } = require('child_process');
const url = require('url');
// const subject = new Subject();
const hostname = '127.0.0.1';
const port = 5555;
http.createServer((req, res) => {
    const childProcess = fork('reading-file-child-process.js');
    const path = url.parse(req.url,true).query.url;
    if(path){
    childProcess.send(path);
    childProcess.on('message', (chunck) => {
        if (chunck === 'END') {
            
            res.end();
            console.log('processing end file')
        } else{
            console.log('writing chunck..')
            res.write(chunck);
        }
    });
}
}).listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));

