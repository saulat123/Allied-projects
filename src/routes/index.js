const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const productRoute = require("./product.route");
const categoryRoute = require("./category.route");
const orderRoute = require("./order.route");
const orderDetailRoute = require("./orderDetail.route");
const product_image = require("./product_image.route");
const product_reviews = require("./product_reviews.route");
const product_specs = require("./product_specs.route");
const cartRoute = require("./cart.route");
const cartItemRoute = require("./cart_item.route");

const router = express.Router();
const routes = [
  {
    path: "/auth",
    route: authRoute,
  },
  { path: "/dashboard", route: adminRoute },

  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/product",
    route: productRoute,
  },
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/cart",
    route: cartRoute,
  },
  {
    path: "/cartItem",
    route: cartItemRoute,
  },
  {
    path: "/order",
    route: orderRoute,
  },
  {
    path: "/order/orderDetail",
    route: orderDetailRoute,
  },
  {
    path: "/product/Image",
    route: product_image,
  },
  {
    path: "/product/Reviews",
    route: product_reviews,
  },
  {
    path: "/product/Specs",
    route: product_specs,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
