import { Router } from 'express';

// controller
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.addOrder);
router.patch('/:id', OrderController.modifyOrder);

export default router;
