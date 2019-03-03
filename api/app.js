import express from 'express';
import bodyParser from 'body-parser';

import mealRoutes from './routes/meal.route';
// import orderRoutes from './routes/order.route';
import menuRoutes from './routes/menu.route';
import orderRoutes2 from './routes/order2.route';

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

app.use('/api/v1/meals', mealRoutes);
// app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/orders2', orderRoutes2);
app.use('/api/v1/menu', menuRoutes);

app.get('/', (req, res) => {
  res.status(200);
  res.json(
    {
      message: 'App is Working',
    },
  );
});
export default app;
