"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _order = _interopRequireDefault(require("../controllers/order2.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// controller
var router = (0, _express.Router)();
router.get('/', _order.default.getAllOrders);
router.post('/', _order.default.addOrder);
router.patch('/:id', _order.default.modifyOrder);
router.get('/:id', _order.default.getOrder);
var _default = router;
exports.default = _default;
//# sourceMappingURL=order2.route.js.map