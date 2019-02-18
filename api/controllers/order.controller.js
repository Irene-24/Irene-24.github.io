import OrderService from '../services/order.services';

const OrderController = {
  getAllOrders(req, res) {
    const allOrders = OrderService.getAllOrders();
    const response = {
      count: allOrders.length,
      Orders: allOrders,
    };
    return res.json(response).status(200);
  },
  addOrder(req, res) {
    const order = req.body;
    const createdOrder = OrderService.addOrder(order);
    return res.status(201).json({ createdOrder });
  },
};

export default OrderController;
