import { Router } from 'express';

// controller
import MealController from '../controllers/meal.controller';


const router = Router();

router.get('/', MealController.getAllMeals);
router.get('/:id', MealController.getMeal);
router.post('/', MealController.addMeal);
router.patch('/:id', MealController.modifyMeal);
router.delete('/:id', MealController.deleteMeal);

export default router;
