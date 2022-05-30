const { product } = require("../models");
const db = require("../models");
const Category = db.category;
const Product = db.product;

const viewCategory = async (req, res) => {
  const category = await Category.findAll();
  res.render("pages/category", { category });
};

const getCategorybyId = async (req, res) => {
  const category = await Category.findAll({
    where: { cat_id: req.params.id },
  });
  // res.send(getcatbyId)
  res.render("pages/category", { category });
};

const getProductbyCategory = async (req, res) => {
  if (req.params.id == "All") {
    const category = await Category.findAll({ include: Product });
     if (category) {
      // res.send(category);
      // console.log("errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror pharran wasty kundi",category)
      res.render("pages/productByCat", { category });
    } else {
      res.send("Category not found");
    }
  } else {
    const category = await Category.findByPk(req.params.id, {
      include: Product,
    });
    if (category) {
      res.render("pages/productByCat", { category });
    } else {
      res.send("Category not found");
    }
  }
};

const getinsertCategory = async (req, res) => {
  res.render("pages/admin/addCategory");
};
const insertCategory = async (req, res) => {
  console.log(req.body);
  const newCategory = await Category.create({
    catName: req.body.catName,
    cat_img: req.file.filename,
  });
  console.log(newCategory);
  res.send(newCategory);
};

module.exports = {
  viewCategory,
  getProductbyCategory,
  insertCategory,
  getinsertCategory,
  getCategorybyId,
};
