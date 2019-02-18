import data from '../utils/data';
import Meal from '../models/meal.model';
import Option from '../models/options.model';

const MealService = {
  getAllMeals() {
    const validMeals = data.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.category = meal.category;
      newMeal.price = meal.price;
      const options = data.options.map((opt) => {
        const newOpt = new Option();
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
  addMeal(meal) {
    const newMeal = meal;
    const mealLength = data.meals.length;
    const lastID = data.meal[mealLength - 1].id;
    newMeal.id = lastID + 1;
    data.meals.push(newMeal);
    return newMeal;
  },
  deleteMeal(mealID) {
    const id = mealID;
    const meals = [...data.meals];
    const indexOfMealToRemove = meals.findIndex(meal => meal.id === id);
    meals.splice(indexOfMealToRemove, 1);
    data.meals = meals;
  },
  modifyMeal(mealID, updates) {
    const id = mealID;
    const meals = [...data.meals];
    const indexOfMealToModify = meals.findIndex(meal => meal.id === id);
    const theMeal = meals[indexOfMealToModify];
    updates.forEach((update) => {
      update.keys().forEach((key) => {
        theMeal[key] = update[key];
      });
    });
    return theMeal;
  },
  getMeal(mealID) {
    const id = mealID;
    const theMeal = data.meals.find(meal => meal.id === id);
    return theMeal;
  },
};

export default MealService;
