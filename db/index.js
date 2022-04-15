const { MongoClient } = require("mongodb");

const URI = `mongodb+srv://user:pass@url.mongodb.net/collection?retryWrites=true&w=majority`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
});

module.exports = client;
