const express = require("express");

const pReviewsCont = require("../controllers/product_reviews.controller");

const router = express.Router();

router.route("/").get(pReviewsCont.viewProductReviews);
router.route("/:id").get(pReviewsCont.getProductRevbyId);

router.route("/addProductReview").post(pReviewsCont.insertProjectRev);

module.exports = router;
