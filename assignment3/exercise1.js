/**
 * Create a simple Node script that convert 'www.mum.edu' domain name to the equivalent IP address.
 * (Use 'dns' module, resolve4)
 * 
 */

var dns = require('dns');

dns.resolve4('www.mum.edu',(err, addresses, family)=>console.log("The equivalent IP Address of 'www.mum.edu' is: "+addresses));
