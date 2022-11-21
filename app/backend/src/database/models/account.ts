import { DECIMAL } from 'sequelize';
import { INTEGER, Model } from 'sequelize';
import Transaction from './transaction';
import db from '.';
// import User from './user';

export default class Account extends Model {
  id!: number;
  balance!: number;
}

Account.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DECIMAL(12,2)
    }

}, {
  sequelize: db,
  modelName: 'accounts',
  tableName: 'Accounts',
  timestamps: false,
});

// Account.hasOne(User, {
//     foreignKey: 'id',
//     as: 'users'
// })

Account.hasMany(Transaction, {
    foreignKey: 'debitedAccountId',
    as: 'debited_transactions'
})

Account.hasMany(Transaction, {
    foreignKey: 'creditedAccountId',
    as: 'credited_transactions'
})