import { Router } from 'express';

// controller
import MealController from '../controllers/meal.controller';


const router = Router();

router.get('/', MealController.getAllMeals);

export default router;
