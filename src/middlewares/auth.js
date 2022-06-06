const db = require("../models");
const User = db.user;

const jwt = require("jsonwebtoken");
// const { redirect } = require("express/lib/response");

const auth = (req, res, next) => {
  // get from cookie
  const token = req.cookies.jwt;

  // check if token exists
  if (token) {
    // jwt.verify(token, "tokensecret", (err, decoded) => {
    //   if (err)
    //     console.log(err.message);
    //     res.redirect("/auth/signin");
    //   } else {
    //     // console.log(decoded);
    //     next();
    //   }
    // });
    const varifyToken = jwt.verify(token, "tokensecret");
    if (varifyToken) {
      next();
    } else {
      res.redirect("/auth/signin");
    }
  } else res.redirect("/auth/signin");
};

const setViewUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "tokensecret", async (err, decoded) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findByPk(decoded.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = {
  auth,
  setViewUser,
};
