const polka = require('polka')

polka()
  .get('/', (req, res) => res.end('Hello World!'))
  .listen(9001)