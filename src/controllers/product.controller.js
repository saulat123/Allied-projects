const { orderDetail, category } = require("../models");
const db = require("../models");
const Product = db.product;
const Category = db.category;
const Product_image = db.product_image;

const findProducts = async (req, res) => {
  const product = await Product.findAll();
  // res.send(product);
  // const product=await products;
  // console.log(product)
  res.render("pages/product", { product });
};

const getProductbyId = async (req, res) => {
  const category=await Category.findAll();
  const product = await Product.findAll({
    where: { product_id: req.params.id },
  });

  res.render("pages/productDetail", { product, category });
};

const getOrderDetailbyProduct = async (req, res) => {
  const detail = await Product.findByPk(req.params.id, {
    include: orderDetail,
  });
  res.send(detail);
};

const getInsertProducts = async (req, res) => {
  // {
  //   include: Product_image;
  // }
  res.render("pages/admin/addProduct");
};

const insertProducts = async (req, res) => {
  try {
    console.log("request body", req.body);
    console.log("request body name", req.body.pName);

    const newProduct = await Product.create(
      {
        pName: req.body.pName,
        cat_id: req.body.cat_id,
        pCost: req.body.pCost,
        pDescription: req.body.pDescription,
        pFeatured: req.body.pFeatured,
        pImage: req.file.filename,
      },
      // { include: [Product_image] }
    );
    // console.log("New Product", newProduct);
    // res.send(newProduct);
    // res.status(200).json({ status: true, newProduct });
  } catch (error) {
    console.log(error);
  }
};
const uploadProductImg = async (req, res) => {
  try {
    console.log("request body", req.body);
    // console.log("request body name", req.body.pName);

    const newProductImg = await Product.create(
      {
        
        product_id: req.body.product_id,
        pImage: req.file.filename,
      },
    );
    console.log("New Product", newProductImg);
    // res.send(newProduct);
    res.status(200).json({ status: true, newProduct });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findProducts,
  getInsertProducts,
  insertProducts,
  uploadProductImg,
  getProductbyId,
  getOrderDetailbyProduct,
};
