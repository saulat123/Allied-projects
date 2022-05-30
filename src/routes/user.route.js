const express = require("express");
const router = express.Router();
// const db = require("../models");
// const product = db.product;
const uc = require("../controllers/user.controller");
const multer  = require('multer')
const upload = multer({ dest: 'data/uploads/' })
router.route("/").get(uc.viewUser);
router.route("/home").get(uc.getUserHome);
// router.route("/dashboard").get(uc.getAdminDashboard);

router.route("/:id").get(uc.getUserbyid);
router.route("/:id/order").get(uc.getOrderbyUser);
// router.route('/').post(upload.single('photo'),uc.profile)
module.exports = router;

 