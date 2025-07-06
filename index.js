const http = require('http')

http
  .createServer((req, res) => {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Headers':
          'content-type, snapfab-nonce, snapfab-signature, snapfab-timestamp',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Origin': 'https://staging.snapfab.com',
      })
      return res.end() // empty body
    }
  })
  .listen(8080)
