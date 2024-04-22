import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db';
const app = express(); // Create an Express application
app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Welcome to our Express application with TypeScript!');
});

// Route that interacts with the database
app.get('/test-db', async (req, res) => {
  try {
    await sequelize.authenticate(); // Test the connection again
    res.send('Database connection successful');
  } catch (error) {
    res.status(500).send('Failed to connect to the database');
  }
});

export default app; // Export the Express app
