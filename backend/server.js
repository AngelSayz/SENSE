// Import the app.js file which contains our Express application
const app = require('./app');

// Get port from environment variables
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});