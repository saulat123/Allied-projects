const express = require("express");
require("ejs");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const config = require("./config/config");
const route = require("./routes");
const { setViewUser } = require("./middlewares/auth");

app.set("view engine", "ejs");
app.disable("view cache")

app.use(cookieParser());
app.use(cors());
app.use(express.json());
// app.use("/", productRoute);
app.use(express.static("public"));
app.get("/", (re, res) => {
  res.render("pages/homePage");
});
app.use("/", route);

app.listen(config.app.port, console.log(`Server... ${config.app.port}`));
