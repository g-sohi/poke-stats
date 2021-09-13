const express = require("express");
const bodyParser = require("body-parser");
const getJSON = require("get-json");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    const query = req.body.pokemonName;
    console.log(query);
    const url = "https://pokeapi.co/api/v2/pokemon/" + query + "/";
    getJSON(url, function(error, response){
            console.log(response);
            pokemon = response;
            res.render('pokemon', {pokemon});
    });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})
