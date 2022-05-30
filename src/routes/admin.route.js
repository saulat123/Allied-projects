const express = require("express");
const adminController = require("../controllers/admin.controller");
const productController = require("../controllers/product.controller");
const multer = require("../middlewares/multer");
const router = express.Router();

router.route("/").get(adminController.getAdminDashboard);
router.route("/viewCategory").get(adminController.viewCategory);
router.route("/viewProduct").get(adminController.viewProduct);
router
  .route("/addProduct")
  .get(adminController.getInsertProduct)
  // .post(productController.insertProducts);
  .post(multer.upload.single("pImage"),productController.insertProducts);

router.route("/viewProduct/:id").get(adminController.getProductbyId);
router
  .route("/editProduct/:id")
  .get(adminController.getEditProducts)
  .put(multer.upload.single("pImage"), adminController.editProducts);

router
  .route("/deleteProduct/:id")
  .get(adminController.getDeleteProducts)
  .delete(adminController.deleteProducts);

router.route("/viewCategory/:id/products").get(adminController.getCategorybyId);

router
  .route("/editCategory/:id")
  .get(adminController.getEditCategory)
  .put(multer.upload.single("cat_img"), adminController.editCategory);

router
  .route("/deleteCategory/:id")
  .delete(adminController.deleteCategory);

module.exports = router;
