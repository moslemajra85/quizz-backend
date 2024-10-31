const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Successfully Connect TO MongoDB...'.blue.bold);
  } catch (error) {
    console.error('We could not connect to MongoDB...', error.message);
  }
}

module.exports = connectDB;
