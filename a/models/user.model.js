module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("users", {
    user_id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN },
    contact: { type: DataTypes.STRING },  
  });
  return user;
};
