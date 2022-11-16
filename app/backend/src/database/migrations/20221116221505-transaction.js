'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      debitedAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    
      creditedAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    
      value: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false,
      },
    
      createdAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions')
  }
};
