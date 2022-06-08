const { cart_item } = require("../models");
const db = require("../models");
const Cart = db.cart;
const Cart_item = db.cart_item;
const Product = db.product;

const viewCart = async (req, res) => {
  const getCart = await Cart.findAll({
    include: [{ model: Cart_item, include: [Product] }],
    // where: { user_id: 41 },
    where: { user_id: res.locals.user.user_id },
  });
  console.log("Cart:", await getCart);
  // res.send(getCart);
  res.render("pages/cart", { getCart });
};

const addCart = async (req, res, next) => {
  // console.log("Requrest body: ", req.body);
  // console.log("user_id:", res.locals.user.user_id);
console.log("cart user_id", Cart);

const userExist=await Cart.findOne({
  where: {
    user_id: res.locals.user.user_id
  }
});
if(userExist==null){
  const addNewCart = await Cart.create({
    user_id: res.locals.user.user_id,
    date: req.body.date,
    
  });

  const tPrice = req.body.quantity * req.body.price;
  const addNewCartItem = await Cart_item.create({
    product_id: req.body.product_id,
    quantity: req.body.quantity,
    price: tPrice,
    cart_id: addNewCart.cart_id,
  });
}
else{
  const tPrice = req.body.quantity * req.body.price;
  const addNewCartItem = await Cart_item.create({
    product_id: req.body.product_id,
    quantity: req.body.quantity,
    price: tPrice,
    cart_id: userExist.cart_id,
  });
}
  console.log(addNewCart, addNewCartItem);
  res.send();
};

const deleteCart = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await Cart_item.destroy({
      where: { user_id: 5 },
    });
    console.log(result);
    // res.status(200).json({ status: true, result });
    // res.redirect("/dashboard/viewProduct")
  } catch (error) {
    res.send(error);
  }
};

module.exports = { viewCart, addCart, deleteCart };
