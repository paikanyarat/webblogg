module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define("Menu", {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        size: DataTypes.STRING,
        category: DataTypes.STRING,
        scenttype: DataTypes.STRING,
        description: DataTypes.STRING,
        ingredients: DataTypes.STRING
    })
    return Menu;
  };