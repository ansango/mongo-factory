const { faker } = require("@faker-js/faker");
const { v4 } = require("uuid");
const { randomCategory } = require("./category");
const user = () => {
  return {
    _id: v4(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    account: {
      avatar: faker.image.avatar(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    },
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
    job: faker.name.jobTitle(),
    preferences: [randomCategory(), randomCategory(), randomCategory()],
    recipes: {
      favorites: [],
      bookmarked: [],
      cooked: [],
    },
    comments: [],
    blenders: [],
  };
};

module.exports = user;
