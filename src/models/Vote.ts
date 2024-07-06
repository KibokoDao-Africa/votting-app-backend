import { DataTypes, Model, Sequelize, Association } from 'sequelize';
import { User } from './User.js'; // Ensure you import the User model correctly

export class Vote extends Model {
  public id!: string;
  public userId!: string;
  public vote!: string;

  public static associations: {
    user: Association<Vote, User>;
  };

  public static associate(models: any) {
    Vote.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

export default (sequelize: Sequelize) => {
  Vote.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    vote: {
      type: DataTypes.ENUM('yes', 'no'),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Vote',
  });

  return Vote;
};
