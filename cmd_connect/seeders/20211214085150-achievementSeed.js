'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('achievement', [
          {
            userId:1,
            english:22,
            chinese:22,
            math:22,
            createdAt:new Date(),
            updatedAt:new Date()
          },
        {
          userId:1,
          english:11,
          chinese:11,
          math:11,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          userId:1,
          english:33,
          chinese:33,
          math:33,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          userId:2,
          english:44,
          chinese:44,
          math:44.5,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          userId:2,
          english:55,
          chinese:55,
          math:55.5,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          userId:3,
          english:88,
          chinese:88,
          math:88.5,
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ], {});

  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('achievement', null, {});

  }
};
