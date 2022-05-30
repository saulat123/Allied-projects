const express = require("express");

const catController = require("../controllers/category.controller");

const router = express.Router();
const multer = require("../middlewares/multer");



router.route("/").get(catController.viewCategory);

router
  .route("/addCategory")
  .get(catController.getinsertCategory)
  .post(multer.upload.single("cat_img"), catController.insertCategory);

router.route("/:id").get(catController.getCategorybyId);

router.route("/:id/products").get(catController.getProductbyCategory);

module.exports = router;
