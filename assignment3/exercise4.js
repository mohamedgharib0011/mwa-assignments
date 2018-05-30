/**
 * Using Node Stream API, create a script to:
 *  - Zip a file using Gzip algorithm
 *  - Unzip a file using Gunzip algorithm
 * (Use zlib core library)
 * 
 */

const fs=require('fs');
const zlib=require('zlib');
const gzip=zlib.createGzip();
const gunzip=zlib.createGunzip();

 //////////////////// zip large_photo.jpg using Gzip /////////////////////
 const readable1=fs.createReadStream('./large_photo.jpg');
 const compressed=fs.createWriteStream('./large_photo.jpg.gz');

 readable1.pipe(gzip).pipe(compressed);


 // make sure the file exist
//////////////////// unzip large_photo.jpg.gz using Gunzip /////////////////////

const readable=fs.createReadStream('./large_photo.jpg.gz');
const unCompressed=fs.createWriteStream('./converted_large_photo.jpg');

readable.pipe(gunzip).pipe(unCompressed);
