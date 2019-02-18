import MealService from '../services/meal.services';

const MealController = {
  getAllMeals(req, res) {
    const allMeals = MealService.getAllMeals();
    const response = {
      count: allMeals.length,
      meals: allMeals,
    };
    return res.json(response).status(200);
  },
  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.status(201).json({ createdMeal });
  },
  deleteMeal(req, res) {
    const mealid = req.params.id;
    MealService.deleteMeal(mealid);
    return res.status(200).json({ message: 'Meal deleted' });
  },
  modifyMeal(req, res) {
    const mealid = req.params.id;
    const updates = req.body;
    const modMeal = MealService.modifyMeal(mealid, updates);
    return res.status(200).json({ modMeal });
  },
  getMeal(req, res) {
    const mealid = req.params.id;
    console.log(mealid);
    const Meal = MealService.getMeal(mealid);
    return res.status(200).json({ Meal });
  },
};

export default MealController;
