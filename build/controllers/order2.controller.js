"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order2.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController2 = {
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

    var modifiedOrder = _order.default.modifyOrder(orderid, updates);

    return res.status(200).json({
      modifiedOrder: modifiedOrder
    });
  },
  getOrder: function getOrder(req, res) {
    var orderid = req.params.id;

    var theOrder = _order.default.getOrder(orderid);

    return res.status(200).json({
      theOrder: theOrder
    });
  }
};
var _default = OrderController2;
exports.default = _default;
//# sourceMappingURL=order2.controller.js.map