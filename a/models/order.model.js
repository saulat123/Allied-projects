module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("orders", {
    order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
    },
    user_id: { type: DataTypes.INTEGER },
    orderDate: { type: DataTypes.DATE },
    orderAddress: { type: DataTypes.STRING },
    orderAmount: { type: DataTypes.DECIMAL },
    orderStatus: { type: DataTypes.STRING },
    shipDate: { type: DataTypes.DATE },
  });

  return order;
};
