/* eslint-disable */


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Accounts',
      [
        {
          balance: 100.00,
        },
        {
          balance: 100.00,
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};
