const { product } = require("../models");
const db = require("../models");
const Product = db.product;
const Category = db.category;

/******************** Admin Dashboard ********************/
const getAdminDashboard = async (req, res) => {
  res.render("pages/admin/dashboard", {
    name: req.query.name,
    email: req.query.email,
  });
};

/******************** Category ********************/
const viewCategory = async (req, res) => {
  const category = await Category.findAll();
  res.render("pages/admin/category", { category });
};

const getCategorybyId = async (req, res) => {
  const category = await Category.findByPk(req.params.id, {
    include: Product,
  });
  if (category) {
    res.render("pages/admin/viewCategory", { category });
  } else {
    res.send("Category not found");
  }
};

const getEditCategory = async (req, res) => {
  const category = await Category.findOne({
    where: { cat_id: req.params.id },
  });
  // console.log(product.product_id)
  res.render("pages/admin/editCategory", { category });
};

const editCategory = async (req, res) => {
  try {
    // const product_id = req.params.product_id;
    console.log(req.body);

    console.log(req.params.id);

    const result = await Category.update(
      {
        catName: req.body.catName,
        cat_img: req.file.filename,
      },

      { where: { cat_id: req.params.id } }
    );
    console.log(result);
    res.status(200).json({ status: true, result });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    console.log("req body", req.body);
    const result = await Category.destroy({
      where: { cat_id: req.body.cat_id },
    });
    console.log(result);
    res.status(200).json({ status: true, result });
  } catch (error) {
    res.send(error);
  }
};

/******************** Products ********************/

const viewProduct = async (req, res) => {
  const product = await Product.findAll({ include: Category });
  const category = await Category.findAll();
  // res.send(product)
  console.log(product);
  res.render("pages/admin/products", { product, category });
};

const getProductbyId = async (req, res) => {
  const product = await Product.findAll({
    // include: Category,
    where: { product_id: req.params.id },
  });

  res.render("pages/admin/viewProduct", { product });
};

const getInsertProduct = async (req, res) => {
  const category= await Category.findAll();
  res.render("pages/admin/addProduct", {category});
};

const getEditProducts = async (req, res) => {
  const product = await Product.findOne({
    include: Category,
    where: { product_id: req.params.id },
  });
  const category= await Category.findAll();
  // console.log(product.product_id)
  res.render("pages/admin/editProduct", { product, category });
};

const editProducts = async (req, res) => {
  try {
    // const product_id = req.params.product_id;
    console.log(req.body);

    console.log(req.params.id);

    const result = await Product.update(
      // {include: Category},
      {
        pName: req.body.pName,
        cat_id: req.body.cat_id,
        pCost: req.body.pCost,
        pDescription: req.body.pDescription,
        pFeatured: req.body.pFeatured,
        pImage: req.file.filename,
      },

      { where: { product_id: req.params.id } }
    );
    console.log(result);
    res.status(200).json({ status: true, result });
  } catch (error) {
    res.send(error);
  }

  // console.log(result1);
  // res.send(newProduct);
};

const getDeleteProducts = async (req, res) => {
  const product = await Product.findOne({
    where: { product_id: req.params.id },
  });
  // console.log(product.product_id)
  res.render("pages/admin/deleteProduct", { product });
};

const deleteProducts = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await Product.destroy({
      where: { product_id: req.params.id },
    });
    console.log(result);
    res.status(200).json({ status: true, result });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAdminDashboard,
  viewCategory,
  getCategorybyId,
  getEditCategory,
  editCategory,
  deleteCategory,
  viewProduct,
  getInsertProduct,
  getProductbyId,
  getEditProducts,
  editProducts,
  getDeleteProducts,
  deleteProducts,
};
