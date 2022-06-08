const { cart_item } = require("../models");
const db = require("../models");
const Cart = db.cart;
const Cart_item = db.cart_item;
const Product = db.product;

const editCartItem = async (req, res) => {
  try {
    console.log(req.body);

    console.log(req.params.id);

    const result = await Cart_item.update(
      {
        quantity: req.body.quantity,
      },

      { where: { item_id: req.params.id } }
    );
    console.log(result);
    res.status(200).json({ status: true, result });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};


const deleteCartItem = async (req, res) => {
    try {
      console.log(req.params.id);
      const result = await Cart_item.destroy({
        where: { item_id: req.params.id },
      });
      console.log(result);
      // res.status(200).json({ status: true, result });
      res.redirect("/cart")
    } catch (error) {
      res.send(error);
    }
  };

module.exports = { editCartItem,deleteCartItem  };
