import { Sequelize } from 'sequelize';
import userModel from './User';
import voteModel from './Vote';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/dbname');

const models = {
  User: userModel(sequelize),
  Vote: voteModel(sequelize),
};

Object.keys(models).forEach((modelName) => {
  if ((models[modelName] as any).associate) {
    (models[modelName] as any).associate(models);
  }
});

export { sequelize };
export default models;
