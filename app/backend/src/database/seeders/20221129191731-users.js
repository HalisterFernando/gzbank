/* eslint-disable */


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Halister Fernando',
          password: '$2b$10$7gZHnYYLnXn9TgG/uGbgBuZ.65mzWT/OqcC8MY3YeIn3Oax0kImXO',
          account_id: 1,
        },
        {
          username: 'Priscila Franzin',
          password: '$2b$10$qRlNSWaVvYitQAvEgZZpi.LOh3KJrzHMhrChuIMGoDsOAiP0pR0de',
          account_id: 2,
        },
      ],
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
