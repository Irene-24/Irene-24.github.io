import { Router } from 'express';

// controller
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.getAllOrders);

export default router;
