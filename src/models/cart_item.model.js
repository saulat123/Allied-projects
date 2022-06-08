module.exports = (sequelize, DataTypes) => {
    const cart_item = sequelize.define("cart_item", {
      item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      cart_id: { type: DataTypes.INTEGER },
      product_id: { type: DataTypes.INTEGER },
      quantity: { type: DataTypes.INTEGER },
      price: { type: DataTypes.STRING },
    });
  
    return cart_item;
  };
  