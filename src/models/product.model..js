module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("products", {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pName: { type: DataTypes.STRING },
    cat_id: { type: DataTypes.INTEGER },
    pCost: { type: DataTypes.STRING },
    pDescription: { type: DataTypes.STRING },
    pFeatured: { type: DataTypes.STRING },
    pImage: { type: DataTypes.STRING },
  });

  return product;
};
