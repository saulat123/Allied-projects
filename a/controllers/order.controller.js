const db = require("../models");
const Order = db.order;

const viewOrder = async (req, res) => {
  const order = await Order.findAll();
  res.send(order);
};

const getOrderybyId = async (req, res) => {
  const getOrdbyId = await Category.findAll({where:{order: req.params.id}});
  res.send(getOrdbyId);
};


const insertOrder = async (req, res) => {
  const newOrder = await Order.create({
    user_id: req.body.user_id,
    orderDate: req.body.orderDate.now(),
    orderAddress: req.body.orderAddress,
    orderAmount: req.body.orderAmount,
    orderStatus: req.body.orderStatus,
    shipDate: req.body.shipDate,
  });
  console.log(newOrder);
  res.send(newOrder);
};



module.exports = { viewOrder, insertOrder, getOrderybyId };
