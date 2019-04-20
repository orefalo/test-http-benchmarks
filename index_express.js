const express = require('express')

express()
  .disable('etag')
  .disable('x-powered-by')
    .get('/', (req, res) => { res.status(200).end('Hello World!') })
  .listen(9001)