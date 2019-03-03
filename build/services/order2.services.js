"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orders = _interopRequireDefault(require("../utils/orders2"));

var _order = _interopRequireDefault(require("../models/order2.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Original source = https://dzone.com/articles/working-with-dates-in-javascript-json-and-oracle-d
var dateTimeRegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

var reviver = function reviver(value) {
  if (dateTimeRegExp.test(value)) {
    return new Date(value).toLocaleString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    });
  }

  return value;
};

var OrderService2 = {
  getAllOrders: function getAllOrders() {
    var validOrders = _orders.default.map(function (order) {
      var newOrder = new _order.default();
      newOrder.id = order.id;
      newOrder.date = reviver(order.date);
      newOrder.price = order.price;
      newOrder.description = _toConsumableArray(order.description);
      return newOrder;
    });

    return validOrders;
  },
  addOrder: function addOrder(order) {
    // format
    // {
    //     "id": 1,
    //     "price": 3000,
    //     "date": "2019-02-22T13:33:43.708Z",
    //     "description": [
    //         {
    //             "mealName": "white rice",
    //             "mealPrice": 200,
    //             "plates": 3,
    //             "toppings": [
    //                 {
    //                     "toppingName": "beef",
    //                     "toppingPrice": 100,
    //                     "quantity": 4
    //                 },
    //                 {
    //                     "toppingName": "pomo",
    //                     "toppingPrice": 100,
    //                     "quantity": 4
    //                 }
    //             ]
    //         }
    //     ]
    // }
    var newOrder = order;
    var ordersLength = _orders.default.length;
    var lastID = _orders.default[ordersLength - 1].id;
    newOrder.id = lastID + 1;

    _orders.default.push(newOrder);

    return newOrder;
  },
  modifyOrder: function modifyOrder(orderID, updates) {
    // format

    /* [
      {
        "price": 1800,
        "description": [
                    {
                        "mealName": "white rice",
                        "mealPrice": 200,
                        "plates": 3,
                        "toppings": [
                            {
                                "toppingName": "beef",
                                "toppingPrice": 100,
                                "quantity": 2
                            },
                            {
                                "toppingName": "pomo",
                                "toppingPrice": 100,
                                "quantity": 2
                            }
                        ]
                    }
                ]
      }
    ]
     */
    var id = orderID;

    var orders = _toConsumableArray(_orders.default);

    var indexOfOrderToModify = orders.findIndex(function (order) {
      return Number(order.id) === Number(id);
    });
    var newOrder = orders[indexOfOrderToModify]; // console.log(indexOfOrderToModify);
    // console.log(id);
    // console.log(orders);

    var oldOrder = _objectSpread({}, newOrder);

    updates.forEach(function (update) {
      Object.keys(update).forEach(function (key) {
        newOrder[key] = update[key];
      });
    });
    return {
      oldOrder: oldOrder,
      newOrder: newOrder
    };
  },
  getOrder: function getOrder(orderID) {
    var id = orderID;

    var orders = _toConsumableArray(_orders.default);

    var indexOfOrderToFind = orders.findIndex(function (order) {
      return Number(order.id) === Number(id);
    });
    var order = orders[indexOfOrderToFind];

    if (order) {
      var newOrder = new _order.default();
      newOrder.id = order.id;
      newOrder.date = reviver(order.date);
      newOrder.price = order.price;
      newOrder.description = _toConsumableArray(order.description);
      return newOrder;
    }

    return 'This order does not exist';
  }
};
var _default = OrderService2;
exports.default = _default;
//# sourceMappingURL=order2.services.js.map