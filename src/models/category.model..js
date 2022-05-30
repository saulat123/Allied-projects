module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define("category", {
    cat_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    catName: { type: DataTypes.STRING },
    cat_img: { type: DataTypes.STRING },
  });

  return category;
};
