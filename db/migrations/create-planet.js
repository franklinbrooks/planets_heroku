'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Planets', {
      name: {
        type: Sequelize.STRING(255)
      },
      orbit_size: {
        type: Sequelize.STRING(255)
      },
      orbital_period: {
        type: Sequelize.STRING(255)
      },
      circumference: {
        type: Sequelize.STRING(255)
      },
      mass: {
        type: Sequelize.STRING(255)
      },
      length_of_day: {
        type: Sequelize.STRING(255)
      },
      mean_temperature: {
        type: Sequelize.STRING(255)
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Planets');
  }
};
