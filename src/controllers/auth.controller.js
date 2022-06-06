const db = require("../models");
const User = db.user;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { user } = require("../models");

const getAuthDashboard = (req, res) => {
  res.send("Dashbaord");
};

const getSignin = (req, res) => {
  res.render("pages/signin");
};

const getSignup = async (req, res) => {
  res.render("pages/signup");
};

const getUserHome = (req, res) => {
  res.send("userhome");
};

const postSignup = async (req, res) => {
  try {
    //hash password
    const hashPass = await bcrypt.hash(req.body.password, 13);
    req.body.password = hashPass;

    const user = await User.create(req.body);
    // console.log(user.name);
    // console.log(user.email);
    // console.log(user.contact);
    // console.log(user.admin);
    if (!user) {
      console.log("User not found");
      res.status(400).json({
        status: false,
        error: "User cannot be created",
      });
    } else {
      res.status(201).json({
        status: true,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          contact: user.contact,
          isAdmin: user.isAdmin,
        },
      });
      // res.redirect("pages/homePage");
    }
  } catch (error) {
    res.status(200).send(error);
  }
};

//signinUser Post method

const postSignin = async (req, res) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>====Acho===>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (user) {
    const comparePass = await bcrypt.compare(password, user.password);
    if (comparePass) {
      // generate Token with 2 days expiry age, payload is user id
      const tokenAge = 2 * 24 * 60 * 60 * 1000;
      const token = generateToken(user.user_id);

      //send as cookie, httpOnly from server
      res.cookie("jwt", token, { httpOnly: true, maxAge: tokenAge });
      res.status(200).json({
        status: true,
        data: {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
      });

      // res.redirect("pages/homePage");
    } else {
      res.status(400).json({
        status: false,
        error: "Invalid Password",
      });
    }
  } else {
    res.status(400).json({
      status: false,
      error: "Invalid Username",
    });
  }
};

//signout

const getSignout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

// function to generate web token
const generateToken = (u_id) => {
  //token secret should be a long & difficult string and in .env file
  const signtoken = jwt.sign({ id: u_id }, "tokensecret"); //expires in 2 days
  return signtoken;
};

module.exports = {
  getSignin,
  postSignin,
  getSignup,
  postSignup,
  getSignout,
  getAuthDashboard,
};
