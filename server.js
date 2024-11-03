
require("dotenv").config()
const express = require("express");
const path = require("path");
const server = express(); //create an express server
const PORT_NUMBER = process.env.PORT || 4000
const OMDB_BASE_URL = `http://www.omdbapi.com/?`

server.get('/test', (request, response) => {
    console.log(request)
    response.status(200).send("API endpoints working as expected");
});

//server endpoint to get the api by searching for a movie title
server.get('/searchMovies', (request, response) => {
    const { title } = request.query
    fetch(`${OMDB_BASE_URL}t=${title}&plot=short&apikey=${process.env.OMDB_API_KEY}`, {method: 'GET'}).then( response => response.json()).then((data) => {
        response.send(data);
    })
});


server.listen(PORT_NUMBER, () => {
    console.log("Server listening on port number: ", PORT_NUMBER);
})