const http = require('http')

http
  .createServer((req, res) => {
    if (req.method === 'OPTIONS') {
      res.writeHead(204) // no headers = no Content-Length
      return res.end() // empty body
    }
  })
  .listen(8080)
