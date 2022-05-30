const express = require("express");

const pSpecsCont = require("../controllers/product_specs.controller");

const router = express.Router();

router.route("/").get(pSpecsCont.viewproductSpec);
router.route("/:id").get(pSpecsCont.getProductSpecsbyId);

router.route("/addProductSpecs").post(pSpecsCont.insertProjectSpecs);

module.exports = router;
