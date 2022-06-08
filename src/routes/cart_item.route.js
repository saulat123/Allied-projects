const express = require("express");
const router = express.Router();
const itemController=require("../controllers/cartItem.controller")
const auth = require("../middlewares/auth");

router.route("/deleteItem/:id").get(itemController.deleteCartItem);
// router.route("/").get(auth.setViewUser, itemController.viewCartItem);

router
  .route("/editItem/:id")
  .get(itemController.editCartItem)

module.exports= router