const { user, categories } = require("./data");

const settings = {
  DB: "robocooker",
  COLLECTION: "categories",
  FAKER: categories,
  ARRAY: true,
};

module.exports = { settings };
