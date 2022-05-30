const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.route("/").get(productController.findProducts);
// router
//   .route("/addProduct")
//   .get(productController.getInsertProducts)
//   .post(productController.insertProducts);

router.route("/:id").get(productController.getProductbyId);
router.route("/:id/orderDetail").get(productController.getOrderDetailbyProduct);

// product by category, orders of product,
module.exports = router;
