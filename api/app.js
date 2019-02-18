import express from 'express';
import bodyParser from 'body-parser';
import MealController from './controllers/meal.controller';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// PREVENT CORS ERRORS

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Aloow-Methods', 'PUT, POST, DELETE, PATCH, GET');
    res.status(200).json({});
  }

  next();
});

app.get('/', MealController.getAllMeal());

app.get('/', (req, res) => {
  res.status(200);
  res.json(
    {
      message: 'Working',
    },
  );
});
export default app;
