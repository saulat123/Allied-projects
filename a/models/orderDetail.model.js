module.exports = (sequelize, DataTypes) => {
  const order_detail = sequelize.define("order_detail", {
    detail_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: { type: DataTypes.INTEGER },
    order_id: { type: DataTypes.INTEGER },
    quantity: { type: DataTypes.INTEGER },
    price: { type: DataTypes.INTEGER },
  });

  return order_detail;
};
