const uWS = require("uWebSockets.js")

const app = uWS
  .App()
  .get("/*", (res, req) => {
    res.end("Hello World!")
  })
  .post("/*", (res, req) => {
    res.end("Hello World!")
  })
  .listen(9001, token => {
    if (token) {
      console.log("Listening to port " + 9001)
    } else {
      console.log("Failed to listen to port " + 9001)
    }
  })
