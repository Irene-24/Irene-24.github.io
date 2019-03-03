"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("../utils/data"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

var _options = _interopRequireDefault(require("../models/options.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var MealService = {
  getAllMeals: function getAllMeals() {
    var validMeals = _data.default.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.category = meal.category;
      newMeal.price = meal.price;

      var options = _data.default.options.map(function (opt) {
        var newOpt = new _options.default();
        newOpt.id = opt.id;
        newOpt.name = opt.name;
        newOpt.price = opt.price;
        return newOpt;
      });

      newMeal.options = options;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var newMeal = meal;
    var mealLength = _data.default.meals.length;
    var lastID = _data.default.meals[mealLength - 1].id;
    newMeal.id = lastID + 1;

    _data.default.meals.push(newMeal);

    return newMeal;
  },
  deleteMeal: function deleteMeal(mealID) {
    var id = mealID;

    var meals = _toConsumableArray(_data.default.meals);

    var indexOfMealToRemove = meals.findIndex(function (meal) {
      return meal.id === id;
    });
    meals.splice(indexOfMealToRemove, 1);
    _data.default.meals = meals;
  },
  modifyMeal: function modifyMeal(mealID, updates) {
    var id = mealID;

    var meals = _toConsumableArray(_data.default.meals);

    var indexOfMealToModify = meals.findIndex(function (meal) {
      return Number(meal.id) === Number(id);
    });
    var theMeal = meals[indexOfMealToModify];
    updates.forEach(function (update) {
      Object.keys(update).forEach(function (key) {
        theMeal[key] = update[key];
      });
    });
    return theMeal;
  },
  getMeal: function getMeal(mealID) {
    var id = mealID; // console.log(id)

    var theMeal = _data.default.meals.find(function (meal) {
      return Number(meal.id) === Number(id);
    });

    return theMeal;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.services.js.map