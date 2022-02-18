const client = require("./db");
const { settings } = require("./settings.js");

(async (options) => {
  const { DB, COLLECTION, FAKER, ARRAY } = options;
  console.log(FAKER);
  try {
    await client.connect();
    const db = client.db(DB);
    const collection = db.collection(COLLECTION);
    await collection.drop();
    let data = [];
    if (!ARRAY) {
      for (let i = 0; i < 100; i++) {
        const newFaker = FAKER();
        data.push(newFaker);
      }
      await collection.insertMany(data);
      console.log(`${COLLECTION} collection seeded!`);
    }
    if (ARRAY) {
      await collection.insertMany(FAKER());
      console.log(`${COLLECTION} collection seeded!`);
    }

    client.close();
  } catch (err) {
    console.log(err.stack);
  }
})(settings);
