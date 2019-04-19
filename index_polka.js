const polka = require('polka')

polka()
  .post('/', (req, res) => res.end('Hello World!'))
  .listen(9001)