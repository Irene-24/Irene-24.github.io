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
};

export default MealService;
