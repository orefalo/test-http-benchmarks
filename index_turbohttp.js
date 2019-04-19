const turbo = require('turbo-http')

const thunderstruck = Buffer.from('Hello World!')
const onrequest=    (req, res) => res.end(thunderstruck)

const server = turbo.createServer({},onrequest)
server.listen(9001)
