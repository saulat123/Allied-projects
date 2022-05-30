const { product_reviews } = require("../models");
const db = require("../models");
const proReviews = db.product_reviews;

const viewProductReviews = async (req, res) => {
  const product_reviews = await proReviews.findAll();
  res.send(product_reviews);
};

const getProductRevbyId = async (req, res) => {
  const getRevbyId = await proReviews.findAll({
    where: { pr_id: req.params.id },
  });
  res.send(getRevbyId);
};

const insertProjectRev = async (req, res) => {
  const newProjRev = await proReviews.create({
    product_id: req.body.product_id,
    reviews: req.body.reviews,
    user_id: req.body.user_id,
  });
  console.log(newProjRev);
  res.send(newProjRev);
};

module.exports = { viewProductReviews, insertProjectRev, getProductRevbyId };
