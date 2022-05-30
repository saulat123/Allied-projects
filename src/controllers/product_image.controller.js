const { product_imgage } = require("../models");
const db = require("../models");
const pImg = db.product_image;

const viewProductImage = async (req, res) => {
  const product_image = await pImg.findAll();
  res.send(product_image);
};

const getProductImgbyId = async (req, res) => {
  const getImgbyId = await pImg.findAll({ where: { pi_id: req.params.id } });
  res.send(getImgbyId);
};

const insertProjectImg = async (req, res) => {
  const newProjImg = await pImg.create({
    product_id: req.body.product_id,
    img_url: req.body.img_url,
    default_img: req.body.default_img,
  });
  console.log(newProjImg);
  res.send(newProjImg);
};

module.exports = { viewProductImage, insertProjectImg, getProductImgbyId };
