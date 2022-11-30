import { STRING, INTEGER, NUMBER, DATE, Model } from 'sequelize';
import db from '.';

export default class Transaction extends Model {
  id!: number;
  debitedAccountId!: number;
  creditedAccountId!: number;
  value!: number;  
  
}

Transaction.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccountId: {
    type: INTEGER,
    allowNull: false,
    field: 'debited_account_id'
  },

  creditedAccountId: {
    type: INTEGER,
    allowNull: false,
    field: 'credited_account_id'
  },

  value: {
    type: STRING,
    allowNull: false,
  },

  createdAt: {
    type: STRING,
    field: 'created_at'
  }

}, {
  sequelize: db,
  underscored: true,
  tableName: 'Transactions',
  timestamps: false  
});

