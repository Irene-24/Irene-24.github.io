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
  modifyOrder(req, res) {
    const orderid = req.params.id;
    const updates = req.body;
    const modOrder = OrderService.modifyOrder(orderid, updates);
    return res.status(200).json({ modOrder });
  },
};

export default OrderController;
