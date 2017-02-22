'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Planets', [
     { name: 'Mercury', orbit_size: '58 million km', orbital_period: '88 Earth days', circumference: '15,326.2 km', mass: '3.3011×10(23) kg', length_of_day: '4222 Earth hours', mean_temperature: '167 C'},
     { name: 'Venus', orbit_size: '108 million km', orbital_period: '225 Earth days', circumference: '38,017.4 km', mass: '4.8685 x 10(24) kg', length_of_day: '2802 Earth hours', mean_temperature: '464 C'},
     { name: 'Earth', orbit_size: '150 million km', orbital_period: '1 Earth year', circumference: '40,041.47 km', mass: '5.9736 x 10(24) kg', length_of_day: '24 Earth hours', mean_temperature: '15 C'},
     { name: 'Mars', orbit_size: '228 million km', orbital_period: '1.881 Earth years', circumference: '21,334.9 km', mass: '6.4185 x 10(23) kg', length_of_day: '24.7 Earth hours', mean_temperature: '-65 C'},
     { name: 'Jupiter', orbit_size: '778 million km', orbital_period: '11.86 Earth years', circumference: '419,977 km', mass: '1.8986 x 10(27) kg', length_of_day: '9.9 Earth hours', mean_temperature: '-110 C'},
     { name: 'Saturn', orbit_size: '1427 million km', orbital_period: '29.46 Earth years', circumference: '378,604 km', mass: '5.6846 x 10(26) kg', length_of_day: '10.7 Earth hours', mean_temperature: '-140 C'},
     { name: 'Uranus', orbit_size: '2871 million km', orbital_period: '84.01 Earth years', circumference: '160,562 km ', mass: '8.6810 x 10(25) kg', length_of_day: '17.2 Earth hours', mean_temperature: '-195 C'},
     { name: 'Neptune', orbit_size: '4497 million km', orbital_period: '164.8 Earth years', circumference: '152,910 km', mass: '10.243 x 10(25) kg', length_of_day: '16.1 Earth hours', mean_temperature: '-200 C'},
     { name: 'Pluto', orbit_size: '5913 million km', orbital_period: '248.1 Earth years', circumference: '7,232 km', mass: '1.25 x 10(22) kg', length_of_day: '153 Earth hours', mean_temperature: '-225 C'},
     { name: 'Proxima Centauri', orbit_size: '', orbital_period: '', circumference: '', mass: '', length_of_day: '', mean_temperature: ''}
    ], {});
  }
};
