const express = require("express");
const adminController = require("../controllers/admin.controller");
const productController = require("../controllers/product.controller");
const router = express.Router();
const auth = require("../middlewares/auth");

const cartController = require("../controllers/cart.controller");

router.route("/").get(auth.setViewUser, cartController.viewCart);
// router.route("/").get( cartController.viewCart);

router.route("/addCart").post(auth.setViewUser, cartController.addCart);

// router.route("/deleteCart").get(auth.setViewUser, cartController.deleteCart);
router.route("/deleteCart").get(cartController.deleteCart);

module.exports = router;
