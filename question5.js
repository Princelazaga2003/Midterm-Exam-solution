// Import required modules
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express
const app = express();
const port = 3000;

// Set up Sequelize connection to MySQL
// Replace the username, password, and database name with your actual MySQL credentials
const sequelize = new Sequelize('mysql://root:password123@localhost:3306/my_database', {
  dialect: 'mysql',
  logging: false, // Disable SQL query logging for cleaner output
});

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users', // Ensure you have a `users` table in your database
  timestamps: false, // Disable timestamps (optional)
});

// Test the connection to MySQL
sequelize.authenticate()
  .then(() => {
    console.log('Connection to MySQL database successful!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Define a route to fetch all users from the database
app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database using Sequelize
    const users = await User.findAll();
    
    // Return the users as a JSON response
    res.json(users);
  } catch (err) {
    // If there's an error, send a 500 error response with the error message
    res.status(500).json({ error: err.message });
  }
});

// Start the Express server on port 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
