'use strict';
module.exports = function(sequelize, DataTypes) {
  var Planet = sequelize.define('Planet', {
    name:DataTypes.STRING(255),
    density:DataTypes.STRING(255),
    orbital_period:DataTypes.STRING(255),
    gravity:DataTypes.STRING(255),
    mass:DataTypes.STRING(255),
    length_of_day:DataTypes.STRING(255),
    temperature:DataTypes.STRING(255),
    distance:DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Planet;
};
