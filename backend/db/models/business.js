'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.belongsTo(models.User, { foreignKey: 'ownerId'})
  };
  return Business;
};
