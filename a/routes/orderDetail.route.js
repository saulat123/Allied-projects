const express = require("express");

const detailController = require("../controllers/orderDetail.controller");

const router = express.Router();

router.route("/").get(detailController.viewOrderDetail);

router.route("/:id").get(detailController.getDetailbyId);
router.route("/:id/products").get(detailController.getOrderDetailbyProduct);

router.route("/addOrderDetail").post(detailController.insertOrderDetail);

module.exports = router;
