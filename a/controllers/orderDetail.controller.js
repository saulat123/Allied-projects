const db = require("../models");
const Detail = db.orderDetail;

const viewOrderDetail = async (req, res) => {
  const detail = await Detail.findAll();
  res.send(detail);
};

const getDetailbyId = async (req, res) => {
  const getDetbyId = await Category.findAll({
    where: { detail_id: req.params.id },
  });
  res.send(getDetbyId);
};

const getOrderDetailbyProduct = async (req, res) => {
  const detail = await Detail.findByPk(req.params.id, { include: Product });
  res.send(detail);
};

const insertOrderDetail = async (req, res) => {
  const newOrderDetail = await Detail.create({
    product_id: req.body.product_id,
    order_id: req.body.order_id,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  console.log(newOrderDetail);
  res.send(newOrderDetail);
};

module.exports = {
  viewOrderDetail,
  insertOrderDetail,
  getDetailbyId,
  getOrderDetailbyProduct,
};
