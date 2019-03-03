"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

var _order = _interopRequireDefault(require("./routes/order2.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import orderRoutes from './routes/order.route';
var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json()); // PREVENT CORS ERRORS

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Aloow-Methods', 'PUT, POST, DELETE, PATCH, GET');
    res.status(200).json({});
  }

  next();
});
app.use('/api/v1/meals', _meal.default); // app.use('/api/v1/orders', orderRoutes);

app.use('/api/v1/orders2', _order.default);
app.use('/api/v1/menu', _menu.default);
app.get('/', function (req, res) {
  res.status(200);
  res.json({
    message: 'App is Working'
  });
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map