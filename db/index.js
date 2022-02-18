const { MongoClient } = require("mongodb");

const URI = `mongodb+srv://<username>:${encodeURIComponent(
  "<password>"
)}@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority`;

const client = new MongoClient(URI, {
  useNewUrlParser: true,
});

module.exports = client;
