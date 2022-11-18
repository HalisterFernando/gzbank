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
        field: 'debited_account_id'
      },
    
      creditedAccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'credited_account_id'
      },
    
      value: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false,
      },
    
      createdAt: {
        type: Sequelize.STRING,
        field: 'created_at'
      },    
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions')
  }
};
