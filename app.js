require('dotenv').config();
const express = require('express');
const colors = require('colors');
const connectDB = require('./db');
const quesitonRoutes = require('./routes/questionRoutes');

connectDB();
const app = express();

app.use(express.json());
app.use('/quizz/api/questions', quesitonRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server is listening in ${process.env.NODE_ENV} mode on port ${port}...`
      .yellow.bold
  );
});
