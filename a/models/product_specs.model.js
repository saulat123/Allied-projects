module.exports = (sequelize, DataTypes) => {
  const product_specs = sequelize.define("product_specs", {
    ps_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    memory: { type: DataTypes.INTEGER },
    product_id: { type: DataTypes.INTEGER },
    color: { type: DataTypes.STRING },
    screen_size: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    ram: { type: DataTypes.STRING },
  });

  return product_specs;
};
