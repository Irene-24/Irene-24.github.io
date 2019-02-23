import { Router } from 'express';

// controller
import OrderController2 from '../controllers/order2.controller';

const router = Router();

router.get('/', OrderController2.getAllOrders);
router.post('/', OrderController2.addOrder);
router.patch('/:id', OrderController2.modifyOrder);
router.get('/:id', OrderController2.getOrder);

export default router;
