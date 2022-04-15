const { v4 } = require("uuid");
const categories = () => [
  {
    name: "carne",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1_tpsbd9.avif",
  },
  {
    name: "pescado",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-1_totovv.avif",
  },
  {
    name: "pasta",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2_ssoal8.avif",
  },
  {
    name: "arroz",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-2_rkuidy.avif",
  },
  {
    name: "postres",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-3_jkwidp.avif",
  },
  {
    name: "dulces",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-1_hqyp3x.avif",
  },
  {
    name: "básicas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-4_q0qsxl.avif",
  },
  {
    name: "entrantes",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-5_d4i2do.avif",
  },
  {
    name: "acompañamientos",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-2_trvzdl.avif",
  },
  {
    name: "bebidas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-6_extf5b.avif",
  },
  {
    name: "cremas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-7_trmazb.avif",
  },
  {
    name: "sopas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-3_lk2nqo.avif",
  },
  {
    name: "legumbres",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-8_uhaqfk.avif",
  },
  {
    name: "verduras",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-9_mqedue.avif",
  },
  {
    name: "pan",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_2-4_rfh7ms.avif",
  },
  {
    name: "masas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050635/Categories/image_1-10_ootlpu.avif",
  },
  {
    name: "bollería",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-11_eyzi2a.avif",
  },
  {
    name: "salsas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050637/Categories/image_2-5_vgyjgr.avif",
  },
  {
    name: "vegetarianas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-12_s6anpa.avif",
  },
  {
    name: "veganas",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050636/Categories/image_1-13_dg8cf8.avif",
  },
  {
    name: "sin gluten",
    description: "",
    img: "https://res.cloudinary.com/db8nr4kcg/image/upload/v1650050637/Categories/image_2-6_mtycja.avif",
  },
];

const randomCategory = () =>
  categories()[Math.floor(Math.random() * categories().length)];

module.exports = { categories, randomCategory };
