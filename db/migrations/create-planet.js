'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Planets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255)
      },
      density: {
        type: Sequelize.STRING(255)
      },
      orbital_period: {
        type: Sequelize.STRING(255)
      },
      gravity: {
        type: Sequelize.STRING(255)
      },
      mass: {
        type: Sequelize.STRING(255)
      },
      length_of_day: {
        type: Sequelize.STRING(255)
      },
      temperature: {
        type: Sequelize.STRING(255)
      },
      distance: {
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Planets');
  }
};
