const express = require("express");

const pImgCont = require("../controllers/product_image.controller");

const router = express.Router();

router.route("/").get(pImgCont.viewProductImage);
router.route("/:id").get(pImgCont.getProductImgbyId);

router
    .route('/addProjectImg')
    .post(pImgCont.insertProjectImg);

module.exports = router;
