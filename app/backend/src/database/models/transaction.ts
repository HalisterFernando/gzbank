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
    type: NUMBER,
    allowNull: false,
  },

  creditedAccountId: {
    type: NUMBER,
    allowNull: false,
  },

  value: {
    type: STRING,
    allowNull: false,
  },

  createdAt: {
    type: STRING
  }

}, {
  sequelize: db,
  modelName: 'transactions',
  underscored: true,
  tableName: 'Transactions',
  timestamps: false  
});

