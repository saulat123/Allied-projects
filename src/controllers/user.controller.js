const db = require("../models");
const User = db.user;
const Order = db.order;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { order } = require("../models");

const viewUser = async (req, res) => {
  const user = await User.findAll();
  res.render("pages/home", { user });
};

const getUserHome = async (req, res) => {
  res.redirect("../product");
};
// const getAdminDashboard = async (req, res) => {
//   res.render("pages/admin/dashboard", {
//     name: req.query.name,
//     email: req.query.email,
//   });
// };

const getUserbyid = async (req, res) => {
  const id = req.params.id;
  const getUser = await User.findAll({ where: { user_id: id } });
  res.send(getUser);
};

const getOrderbyUser = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: Order,
  });
  if (user) {
    res.render("pages/orders", { user });
  } else {
    res.send("order not found");
  }
};
module.exports = {
  viewUser,
  getUserbyid,
  getUserHome,
  // getAdminDashboard,
  getOrderbyUser,
};
