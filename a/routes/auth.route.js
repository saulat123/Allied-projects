const express = require("express");

const { auth } = require("../middlewares/auth");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.route("/").get(authController.getAuthDashboard);

router
  .route("/signup")
  .get(authController.getSignup)
  .post(authController.postSignup);

router
  .route("/signin")
  .get(authController.getSignin)
  .post(authController.postSignin);

router.get("/signout", authController.getSignout);

module.exports = router;
