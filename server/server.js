const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

app.use(cors())
app.use(express.json())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '543d86df4b384b7da93c79e4412d0c46',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static(path.join(__dirname, "../public")))
app.use("/images", express.static(path.join(__dirname, "../images")))

const port = process.env.PORT || 4005

app.get('/', (req, res) => {
    try {
        console.log("herro")
        nonExistentFunction(res);
        // res.sendFile(path.join(__dirname, '/index.html'))
      } catch (error) {
        rollbar.log("blank function error")
        console.error(error);
}})

app.listen(port, () => {
    console.log(`Jammin' solid on port ${port}`)
})

app.use(rollbar.errorHandler())