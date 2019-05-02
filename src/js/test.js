var utils = require('ethereumjs-util');
var privateKey = new Buffer("ball fury inmate beef display muscle ribbon polar energy tenant cart enact");
var publicKey = utils.privateToPublic(privateKey).toString('hex');
var address = utils.privateToAddress(privateKey).toString('hex');

console.log(publicKey);
console.log(address);