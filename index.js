const net = require('net');

net.createServer(sock => {
  sock.once('data', req => {
    // very lazy parse – just check the verb
    if (req.toString('ascii', 0, 7) === 'OPTIONS') {
      const rsp =
        'HTTP/1.1 204 No Content\r\n' +
        'Access-Control-Allow-Origin: https://staging.snapfab.com\r\n' +
        'Access-Control-Allow-Headers: content-type, snapfab-nonce, snapfab-signature, snapfab-timestamp\r\n' +
        'Access-Control-Allow-Methods: POST, OPTIONS\r\n' +
        'Allow: OPTIONS, HEAD, POST\r\n' +
        '\r\n';

      sock.write(rsp);      // send headers
      // ‼️ DO NOT call sock.end() — leave connection open like Crow
    } else {
      sock.end();           // close for everything else
    }
  });
}).listen(8080, () => console.log('listening on 8080'));