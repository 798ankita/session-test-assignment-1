import app from './App'; // Import the Express app
import dotenv from 'dotenv';
import { PORT } from './env';
dotenv.config();

const Port = PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${Port}`);
});
