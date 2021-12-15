'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('user', [
          {
            username: '张学友',
            password: 'zxyqwe',
            sex:'男',
            age:58,
            dept:'AD',
            createdAt:new Date(),
            updatedAt:new Date()
          }
          ,
          {
            username: '透明度',
            password: 'fdglk',
            sex:'男',
            age:98,
            dept:'AD',
            createdAt:new Date(),
            updatedAt:new Date()
          }

      ], {});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('user', null, {});

  }
};
