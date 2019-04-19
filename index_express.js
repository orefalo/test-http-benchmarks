const express = require('express')

express()
  .disable('etag')
  .disable('x-powered-by')
    .post('/', (req, res) => { res.status(200).end('Hello World!') })
  .listen(9001)