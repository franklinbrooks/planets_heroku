'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Planets', [
     { name: 'Mercury', density: '.984', orbital_period: '0.241', gravity: '.378', mass: '3.3011×10(23) kg', length_of_day: '4222 Earth hours', temperature: '167', distance: '.387', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Venus', density: '.951', orbital_period: '0.615', gravity: '.949', mass: '4.8685 x 10(24) kg', length_of_day: '2802 Earth hours', temperature: '464', distance: '.723', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Earth', density: '1', orbital_period: '1', gravity: '1', mass: '5.9736 x 10(24) kg', length_of_day: '24 Earth hours', temperature: '15', distance: '1', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Mars', density: '.713', orbital_period: '1.881', gravity: '.377', mass: '6.4185 x 10(23) kg', length_of_day: '24.7 Earth hours', temperature: '-65', distance: '1.52', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Jupiter', density: '.240', orbital_period: '11.86', gravity: '2.36', mass: '1.8986 x 10(27) kg', length_of_day: '9.9 Earth hours', temperature: '-110', distance: '5.20', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Saturn', density: '.125', orbital_period: '29.46', gravity: '.916', mass: '5.6846 x 10(26) kg', length_of_day: '10.7 Earth hours', temperature: '-140', distance: '9.58', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Uranus', density: '.230', orbital_period: '84.01', gravity: '.889', mass: '8.6810 x 10(25) kg', length_of_day: '17.2 Earth hours', temperature: '-220', distance: '19.2', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Neptune', density: '.297', orbital_period: '164', gravity: '1.12', mass: '10.243 x 10(25) kg', length_of_day: '16.1 Earth hours', temperature: '-200', distance: '30.05', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Pluto', density: '.380', orbital_period: '248.1', gravity: '.071', mass: '1.25 x 10(22) kg', length_of_day: '153 Earth hours', temperature: '-225', distance: '39.48', createdAt: '2017-01-31', updatedAt: '2017-01-31' },
     { name: 'Proxima Centauri', density: '', orbital_period: '', gravity: '', mass: '', length_of_day: '', temperature: '', distance: '', createdAt: '2017-01-31', updatedAt: '2017-01-31' }
    ], {});
  }
};
