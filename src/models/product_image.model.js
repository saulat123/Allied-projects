module.exports = (sequelize, DataTypes) => {
  const product_image = sequelize.define("product_image", {
    pi_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: { type: DataTypes.INTEGER },
    img_url: { type: DataTypes.STRING },
    default_img: { type: DataTypes.STRING },
  });

  return product_image;
};
