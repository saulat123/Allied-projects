const { cart_item } = require("../models");
const db = require("../models");
const { param } = require("../routes/admin.route");
const Category = db.category;
const Cart = db.cart;
const Cart_item = db.cart_item;

const viewCart = async (req, res) => {
  const getCart = await Cart.findAll();
  // res.send(getCart);
  res.render("pages/cart", { getCart });
};
const viewCartbyUser = async (req, res) => {
  const getCart = await Cart.findAll({
    where: { user_id: req.params.id }
  });
  // res.send(getCart);
  res.render("pages/cart", { getCart });
};

const addCart = async (req, res) => {
  console.log("Requrest body: ",req.body)
  console.log("user_id:",res.locals.user.user_id)
  const addNewCart = await Cart.create({
    user_id: res.locals.user.user_id,
    date: req.body.date,
  });
  const tPrice=req.body.quantity*req.body.price;
  const addNewCartItem = await Cart_item.create({
    product_id: req.body.product_id,
    quantity: req.body.quantity,
    price: tPrice,
    cart_id: addNewCart.cart_id,
  });
  console.log(addNewCart, addNewCartItem);
  res.send();
};

module.exports = { viewCart, addCart, viewCartbyUser };
