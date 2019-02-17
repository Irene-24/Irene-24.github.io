const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.status(200);
  res.json(
    {
      message: 'Working',
    },
  );
});

module.exports = app;
