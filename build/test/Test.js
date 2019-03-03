"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

process.env.NODE_ENV = 'test';

var should = _chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('Testing meal routes', function () {
  it('it should GET all the meals', function (done) {
    _chai.default.request(_app.default).get('/api/v1/meals').end(function (err, res) {
      var body = _objectSpread({}, res.body);

      var count = Number(body.count);

      var meals = _toConsumableArray(body.meals);

      res.should.have.status(200);
      res.body.should.be.a('object');
      count.should.be.a('number');
      meals.should.be.a('array');
      done();
    });
  });
  it('it should post a meal', function (done) {
    var meal = {
      id: 12,
      name: 'porridge beans',
      price: 150,
      category: 'lunch',
      options: [{
        id: 1,
        name: 'chicken',
        price: 150
      }, {
        id: 2,
        name: 'egg',
        price: 60
      }, {
        id: 3,
        name: 'beef',
        price: 100
      }, {
        id: 4,
        name: 'fish',
        price: 200
      }]
    };

    _chai.default.request(_app.default).post('/api/v1/meals').send(meal).end(function (err, res) {
      res.should.have.status(201);
      res.body.should.be.a('object');
      done();
    });
  });
  it('it should GET a meal by a given id', function (done) {
    var id = 2;

    _chai.default.request(_app.default).get("/api/v1/meals/".concat(id)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.Meal.should.have.property('id');
      res.body.Meal.should.have.property('id').eql(id);
      res.body.Meal.should.have.property('name');
      res.body.Meal.should.have.property('price');
      res.body.Meal.should.have.property('category');
      done();
    });
  });
  it('it should DELETE a meal by a given id', function (done) {
    var id = 2;

    _chai.default.request(_app.default).delete("/api/v1/meals/".concat(id)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Meal deleted');
      done();
    });
  });
  it('it should PATCH (modify) a meal by a given id', function (done) {
    var id = 2;
    var updates = [{
      name: 'fried rice',
      category: 'all',
      price: 250
    }];

    _chai.default.request(_app.default).patch("/api/v1/meals/".concat(id)).send(updates).end(function (err, res) {
      res.should.have.status(200);

      var resp = _objectSpread({}, res.body.modMeal);

      resp.should.have.property('id');
      resp.should.have.property('name');
      resp.should.have.property('id').eql(id);
      done();
    });
  });
});
describe('Testing order routes', function () {
  it('it should GET all the orders', function (done) {
    _chai.default.request(_app.default).get('/api/v1/orders2').end(function (err, res) {
      var body = _objectSpread({}, res.body);

      var count = Number(body.count);

      var orders = _toConsumableArray(body.Orders);

      res.should.have.status(200);
      res.body.should.be.a('object');
      count.should.be.a('number');
      orders.should.be.a('array');
      done();
    });
  });
  it('it should POST an order', function (done) {
    var theOrder = {
      price: 3000,
      date: '2019-02-01T12:33:43.350Z',
      description: [{
        mealName: 'porridge yam',
        mealPrice: 200,
        plates: 3,
        toppings: [{
          toppingName: 'beef',
          toppingPrice: 100,
          quantity: 4
        }, {
          toppingName: 'pomo',
          toppingPrice: 100,
          quantity: 4
        }]
      }]
    };

    _chai.default.request(_app.default).post('/api/v1/orders2').send(theOrder).end(function (err, res) {
      var body = _objectSpread({}, res.body.createdOrder);

      var price = Number(body.price);
      var desc = body.description;
      res.should.have.status(201);
      res.body.should.be.a('object');
      price.should.be.a('number');
      desc.should.be.a('array');
      done();
    });
  });
  it('it should GET an order by a given id', function (done) {
    var id = 2;

    _chai.default.request(_app.default).get("/api/v1/orders2/".concat(id)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');

      var body = _objectSpread({}, res.body.theOrder);

      body.should.have.property('id');
      body.should.have.property('id').eql(id);
      body.should.have.property('price');
      body.should.have.property('date');
      body.should.have.property('description');
      body.description.should.be.a('array');
      done();
    });
  });
  it('it should PATCH (modify) an order by a given id', function (done) {
    var id = 2;
    var updates = [{
      price: 1800,
      description: [{
        mealName: 'white rice',
        mealPrice: 200,
        plates: 3,
        toppings: [{
          toppingName: 'beef',
          toppingPrice: 100,
          quantity: 2
        }, {
          toppingName: 'pomo',
          toppingPrice: 100,
          quantity: 2
        }]
      }]
    }];

    _chai.default.request(_app.default).patch("/api/v1/orders2/".concat(id)).send(updates).end(function (err, res) {
      res.should.have.status(200);

      var resp = _objectSpread({}, res.body.modifiedOrder);

      resp.should.have.property('oldOrder');
      resp.should.have.property('newOrder');
      done();
    });
  });
});
describe('Testing menu routes', function () {
  it('it should GET all the menu', function (done) {
    _chai.default.request(_app.default).get('/api/v1/menu').end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  });
});
//# sourceMappingURL=Test.js.map