import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';
import Account from './account';

export default class User extends Model {
  id!: number;
  username!: string;
  password!: string;  
  accountId!: number;
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },

    password: {
    type: STRING,
    allowNull: false,
  },

  accountId: {
    type: INTEGER,
    allowNull: false,
    references: {
        model: Account,
        key: 'id'
    }
  }

}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  tableName: 'Users',
  timestamps: false,
});


User.belongsTo(Account, {
    foreignKey: 'accountId',
    as: 'accounts',    
})