const express = require('express');
const app = express();
const db = require('./config/database');

db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on port ${port}`));