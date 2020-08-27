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
      return queryInterface.bulkInsert('Users', [{
        name: 'Aji',
        username: 'ajiyudhanto',
        email: 'awy@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Aldino',
        username: 'dino',
        email: 'dino@gmail.com',
        password: 'abcdef',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return queryInterface.bulkDelete('Users', null, {})
  }
};
