import { DataTypes, Model, Sequelize } from 'sequelize';

export class User extends Model {
  public id!: string;
  public name!: string;
  public idNumber!: string;
  public phoneNumber!: string;
  public email?: string;

  public static associate: (models: any) => void;
}

export default (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
