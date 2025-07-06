// crow-like-204.js
const net = require('net');

net.createServer(sock => {
  sock.once('data', buf => {
    if (buf.toString('ascii', 0, 7) === 'OPTIONS') {
      const rsp =
        'HTTP/1.1 204 No Content\r\n' +
        'Access-Control-Allow-Origin: https://staging.snapfab.com\r\n' +
        'Access-Control-Allow-Headers: content-type, snapfab-nonce, snapfab-signature, snapfab-timestamp\r\n' +
        'Access-Control-Allow-Methods: POST, OPTIONS\r\n' +
        'Allow: OPTIONS, HEAD, POST\r\n' +
        'Connection: keep-alive\r\n' +    // ← critical
        '\r\n';                           // no Content-Length, no body

      sock.write(rsp);                    // and we leave the socket open
    }
  });
}).listen(8080, () => console.log('listening on 8080'));