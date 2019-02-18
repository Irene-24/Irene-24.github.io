import express from 'express';
import bodyParser from 'body-parser';

const app = express();


app.get('/', (req, res) => {
  res.status(200);
  res.json(
    {
      message: 'Working',
    },
  );
});

export default app;
