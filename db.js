

const mongoose = require('mongoose');

// MongoDB connection URI
const DB_URI = 'mongodb://localhost:27017/Blogdb';

// Connect to MongoDB
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db=mongoose.connection;
// Events
db.on('connected', () => {
  console.log('MongoDB connected successfully');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log(' MongoDB disconnected');
});


module.exports = db;
