"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orders = _interopRequireDefault(require("../utils/orders"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var OrderService = {
  getAllOrders: function getAllOrders() {
    var validOrders = _orders.default.orders.map(function (order) {
      var newOrder = new _order.default();
      newOrder.id = order.id;
      newOrder.price = order.price;
      newOrder.date = order.date.toLocaleString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      newOrder.product = order.product;
      return newOrder;
    });

    return validOrders;
  },
  addOrder: function addOrder(order) {
    var newOrder = order;
    var orderLength = _orders.default.orders.length;
    var lastID = _orders.default.orders[orderLength - 1].id;
    newOrder.id = lastID + 1;

    _orders.default.orders.push(newOrder);

    return newOrder;
  },
  modifyOrder: function modifyOrder(orderID, updates) {
    var id = orderID;

    var orders = _toConsumableArray(_orders.default.orders);

    var indexOfOrderToModify = orders.findIndex(function (order) {
      return order.id === id;
    });
    var theOrder = orders[indexOfOrderToModify];
    updates.forEach(function (update) {
      update.keys().forEach(function (key) {
        theOrder[key] = update[key];
      });
    });
  }
};
var _default = OrderService;
exports.default = _default;
//# sourceMappingURL=order.services.js.map