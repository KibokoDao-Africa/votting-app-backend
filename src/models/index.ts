import { Sequelize } from 'sequelize';
import userModel from './User.js';
import voteModel from './Vote.js';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/dbname');

const models = {
  User: userModel(sequelize),
  Vote: voteModel(sequelize),
};

// Define the type of the models object keys
type ModelName = keyof typeof models;

Object.keys(models).forEach((modelName) => {
  const key = modelName as ModelName;
  if ((models[key] as any).associate) {
    (models[key] as any).associate(models);
  }
});

export { sequelize };
export default models;
