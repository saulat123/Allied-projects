module.exports = (sequelize, DataTypes) => {
  const product_review = sequelize.define("product_reviews", {
    pr_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER },
    reviews: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
  });

  return product_review;
};
