const { MongoClient } = require("mongodb");

const URI = `mongodb+srv://anibalsantos:721989Ansan@cluster0.knytw.mongodb.net/robocooker?retryWrites=true&w=majority`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
});

module.exports = client;
