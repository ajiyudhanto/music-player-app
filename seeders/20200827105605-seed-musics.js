'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      return queryInterface.bulkInsert('Music', [{
        judul: 'Garis Terdepan',
        penyanyi: 'Fiersa Besari',
        pencipta: 'Fiersa Besari',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        judul: 'Hingga Napas Ini Habis',
        penyanyi: 'Fiersa Besari',
        pencipta: 'Fiersa Besari',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        judul: 'Juara Kedua',
        penyanyi: 'Fiersa Besari',
        pencipta: 'Fiersa Besari',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        judul: 'Nadir',
        penyanyi: 'Fiersa Besari',
        pencipta: 'Fiersa Besari',
        createdAt: new Date(),
        updatedAt: new Date()
      }],{})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return queryInterface.bulkDelete('Music', null, {})
  }
};
