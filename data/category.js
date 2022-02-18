const { v4 } = require("uuid");
const categories = () => [
  {
    _id: v4(),
    name: "carne",
    description: "",
  },
  {
    _id: v4(),
    name: "pescado",
    description: "",
  },
  {
    _id: v4(),
    name: "pasta",
    description: "",
  },
  {
    _id: v4(),
    name: "arroz",
    description: "",
  },
  {
    _id: v4(),
    name: "postres",
    description: "",
  },
  {
    _id: v4(),
    name: "dulces",
    description: "",
  },
  {
    _id: v4(),
    name: "básicas",
    description: "",
  },
  {
    _id: v4(),
    name: "entrantes",
    description: "",
  },
  {
    _id: v4(),
    name: "acompañamientos",
    description: "",
  },
  {
    _id: v4(),
    name: "bebidas",
    description: "",
  },
  {
    _id: v4(),
    name: "cremas",
    description: "",
  },
  {
    _id: v4(),
    name: "sopas",
    description: "",
  },
  {
    _id: v4(),
    name: "legumbres",
    description: "",
  },
  {
    _id: v4(),
    name: "verduras",
    description: "",
  },
  {
    _id: v4(),
    name: "pan",
    description: "",
  },
  {
    _id: v4(),
    name: "masas",
    description: "",
  },
  {
    _id: v4(),
    name: "bollería",
    description: "",
  },
  {
    _id: v4(),
    name: "salsas",
    description: "",
  },
  {
    _id: v4(),
    name: "niños",
    description: "",
  },
  {
    _id: v4(),
    name: "vegetarianas",
    description: "",
  },
  {
    _id: v4(),
    name: "veganas",
    description: "",
  },
  {
    _id: v4(),
    name: "sin gluten",
    description: "",
  },
  {
    _id: v4(),
    name: "mambo",
    description: "",
  },
  {
    _id: v4(),
    name: "thermomix",
    description: "",
  },
  {
    _id: v4(),
    name: "kcook",
    description: "",
  },
  {
    _id: v4(),
    name: "maxichef",
    description: "",
  },
  {
    _id: v4(),
    name: "mycook",
    description: "",
  },
  {
    _id: v4(),
    name: "monsieur cuisinie",
    description: "",
  },
];

const randomCategory = () =>
  categories()[Math.floor(Math.random() * categories().length)];

module.exports = { categories, randomCategory };
