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
};

export default OrderController;
