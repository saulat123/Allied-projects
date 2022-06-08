const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("node_projdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: { timestamps: false, freezeTableName: true },
});

const db = {};
db.user = require("./user.model")(sequelize, DataTypes);
db.product = require("./product.model.")(sequelize, DataTypes);
db.category = require("./category.model.")(sequelize, DataTypes);
db.order = require("./order.model")(sequelize, DataTypes);
db.orderDetail = require("./orderDetail.model")(sequelize, DataTypes);
db.product_image = require("./product_image.model")(sequelize, DataTypes);
db.product_reviews = require("./product_reviews.model")(sequelize, DataTypes);
db.product_specs = require("./product_specs.model")(sequelize, DataTypes);
db.cart = require("./cart.model")(sequelize, DataTypes);
db.cart_item = require("./cart_item.model")(sequelize, DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.category.hasMany(db.product, { foreignKey: "cat_id" });
db.product.belongsTo(db.category, { foreignKey: "cat_id" });

db.product.hasMany(db.product_reviews, { foreignKey: "Product_id" });
db.product_reviews.belongsTo(db.product, { foreignKey: "Product_id" });

db.product.hasMany(db.product_image, { foreignKey: "Product_id" });
db.product_image.belongsTo(db.product, { foreignKey: "Product_id" });

db.product.hasMany(db.product_specs, { foreignKey: "Product_id" });
db.product_specs.belongsTo(db.product, { foreignKey: "Product_id" });

db.product.hasMany(db.orderDetail, { foreignKey: "Product_id" });
db.orderDetail.belongsTo(db.product, { foreignKey: "Product_id" });

db.user.hasMany(db.order, { foreignKey: "user_id" });
db.order.belongsTo(db.user, { foreignKey: "user_id" });

db.user.hasMany(db.product_reviews, { foreignKey: "user_id" });
db.product_reviews.belongsTo(db.user, { foreignKey: "user_id" });

db.order.hasMany(db.orderDetail, { foreignKey: "order_id" });
db.orderDetail.belongsTo(db.order, { foreignKey: "order_id" });

db.orderDetail.hasMany(db.product, { foreignKey: "product_id" });
db.product.belongsTo(db.orderDetail, { foreignKey: "product_id" });

db.cart.hasMany(db.cart_item, { foreignKey: "cart_id" });
db.cart_item.belongsTo(db.cart, { foreignKey: "cart_id" });

db.user.hasMany(db.cart, { foreignKey: "user_id" });
db.cart.belongsTo(db.user, { foreignKey: "user_id" });

db.product.hasMany(db.cart_item, { foreignKey: "product_id" });
db.cart_item.belongsTo(db.product, { foreignKey: "product_id" });
// db.cart_item.hasMany(db.product, { foreignKey: "product_id" });
// db.product.belongsTo(db.cart_item, { foreignKey: "product_id" });

module.exports = db;
