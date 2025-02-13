
require('dotenv').config(); // Load environment variables

const app = require('./app'); // Import the Express app
const port = process.env.PORT || 8080; 


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});