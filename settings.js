const { user, categories } = require("./data");

const settings = {
  DB: "cooked",
  COLLECTION: "category",
  FAKER: categories,
  ARRAY: true,
};

module.exports = { settings };
