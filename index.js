const http = require('http')

http
  .createServer((req, res) => {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'access-control-allow-headers':
          'content-type, snapfab-nonce, snapfab-signature, snapfab-timestamp',
        'access-control-allow-methods': 'POST, OPTIONS',
        'access-control-allow-origin': 'https://staging.snapfab.com',
        allow: 'OPTIONS, HEAD, POST',
      })
      return res.end() // empty body
    }
  })
  .listen(8080)
