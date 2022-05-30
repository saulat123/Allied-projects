const express = require("express");

const orderController = require("../controllers/order.controller");

const router = express.Router();

router.route("/").get(orderController.viewOrder);
router.route("/:id").get(orderController.getOrderybyId);

router.route("/addOrder").post(orderController.insertOrder);

module.exports = router;
