import { Sequelize, DataTypes } from 'sequelize';
import { DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } from '../env';
import users from '../models/user.model'; // Import the User model

const db: any = {};
initialize();
async function initialize() {
  const sequelize = new Sequelize('my_app', 'root', 'admin', {
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {},
    port: 6033,
    logging: false,
    pool: {
      max: 10,
      min: 1,
      acquire: 30000,
      idle: 10000,
    },
  });

  // Assign the User model to the db object
  db.users = users(sequelize, DataTypes);
  // Test the database connection
  sequelize
    .authenticate()
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((err) => {
      console.error('Failed to connect to the database:', err);
    });

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  // sync all models with database
  await sequelize.sync({ alter: true });
}
export default db;
