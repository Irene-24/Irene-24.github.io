"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  getAllOrders: function getAllOrders(req, res) {
    var allOrders = _order.default.getAllOrders();

    var response = {
      count: allOrders.length,
      Orders: allOrders
    };
    return res.json(response).status(200);
  },
  addOrder: function addOrder(req, res) {
    var order = req.body;

    var createdOrder = _order.default.addOrder(order);

    return res.status(201).json({
      createdOrder: createdOrder
    });
  },
  modifyOrder: function modifyOrder(req, res) {
    var orderid = req.params.id;
    var updates = req.body;

    var modOrder = _order.default.modifyOrder(orderid, updates);

    return res.status(200).json({
      modOrder: modOrder
    });
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map