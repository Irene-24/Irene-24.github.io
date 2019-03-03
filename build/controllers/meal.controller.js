"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  getAllMeals: function getAllMeals(req, res) {
    var allMeals = _meal.default.getAllMeals();

    var response = {
      count: allMeals.length,
      meals: allMeals
    };
    return res.json(response).status(200);
  },
  addMeal: function addMeal(req, res) {
    var newMeal = req.body;

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.status(201).json({
      createdMeal: createdMeal
    });
  },
  deleteMeal: function deleteMeal(req, res) {
    var mealid = req.params.id;

    _meal.default.deleteMeal(mealid);

    return res.status(200).json({
      message: 'Meal deleted'
    });
  },
  modifyMeal: function modifyMeal(req, res) {
    var mealid = req.params.id;
    var updates = req.body;

    var modMeal = _meal.default.modifyMeal(mealid, updates);

    return res.status(200).json({
      modMeal: modMeal
    });
  },
  getMeal: function getMeal(req, res) {
    var mealid = req.params.id;

    var Meal = _meal.default.getMeal(mealid);

    return res.status(200).json({
      Meal: Meal
    });
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map