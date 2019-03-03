"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  getMenu: function getMenu(req, res) {
    var allMenus = _menu.default.getMenu();

    var response = {
      count: allMenus.length,
      meals: allMenus
    };
    return res.json(response).status(200);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map