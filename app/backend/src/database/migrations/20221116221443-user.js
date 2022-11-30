/* eslint-disable */
'use-strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'account_id',
        references: {
          model: 'Accounts',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
