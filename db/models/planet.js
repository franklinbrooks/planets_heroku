'use strict';
module.exports = function(sequelize, DataTypes) {
  var Planet = sequelize.define('Planet', {
    name:DataTypes.STRING(255),
    date_of_discovery:DataTypes.STRING(255),
    orbit_size:DataTypes.STRING(255),
    orbital_period:DataTypes.STRING(255),
    circumference:DataTypes.STRING(255),
    mass:DataTypes.STRING(255),
    length_of_day:DataTypes.STRING(255),
    mean_temperature:DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Planet;
};
