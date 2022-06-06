module.exports = (sequelize, DataTypes) => {
    const cart = sequelize.define("cart", {
      cart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER },
      date: { type: DataTypes.DATE },
    });
  
    return cart;
  };
  