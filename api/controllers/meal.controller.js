import MealService from '../services/meal.services';

const MealController = {
  getAllMeal(req, res) {
    const allMeals = MealService.fetchAllMeals();
    const response = {
      count: allMeals.length,
      meals: allMeals,
    };
    res.status(200).json(response);
  },
  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    res.status(201).json({ createdMeal });
  },
  deleteMeal(req, res) {
    const mealid = req.params.id;
    MealService.deleteMeal(mealid);
    res.status(200).json({ message: 'Meal deleted' });
  },
  modifyMeal(req, res) {
    const mealid = req.params.id;
    const updates = req.body;
    const modMeal = MealService.modifyMeal(mealid, updates);
    res.status(200).json({ modMeal });
  },
  getMeal(req, res) {
    const mealid = req.params.id;
    const Meal = MealService.getMeal(mealid);
    res.status(200).json({ Meal });
  },
};

export default MealController;
