import OrderService2 from '../services/order2.services';

const OrderController2 = {
  getAllOrders(req, res) {
    const allOrders = OrderService2.getAllOrders();
    const response = {
      count: allOrders.length,
      Orders: allOrders,
    };
    return res.json(response).status(200);
  },
  addOrder(req, res) {
    const order = req.body;
    const createdOrder = OrderService2.addOrder(order);
    return res.status(201).json({ createdOrder });
  },
  modifyOrder(req, res) {
    const orderid = req.params.id;
    const updates = req.body;
    const modifiedOrder = OrderService2.modifyOrder(orderid, updates);
    return res.status(200).json({ modifiedOrder });
  },
  getOrder(req, res) {
    const orderid = req.params.id;
    const theOrder = OrderService2.getOrder(orderid);
    return res.status(200).json({ theOrder });
  },
};

export default OrderController2;
