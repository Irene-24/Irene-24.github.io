'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    title: DataTypes.STRING
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
  };
  return Meal;
};