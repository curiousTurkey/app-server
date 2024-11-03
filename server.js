
require("dotenv").config()
const express = require("express");
const server = express(); //create an express server
const PORT_NUMBER = process.env.PORT || 4000


server.get('/test', (request, respond) => {
    console.log(request)
    respond.status(200).sendFile(path.join(__dirname, 'index.html'))
});

server.listen(PORT_NUMBER, () => {
    console.log("Server listening on port number: ", PORT_NUMBER);
})