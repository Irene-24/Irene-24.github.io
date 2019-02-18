import data from '../utils/orders';
import Order from '../models/order.model';

const OrderService = {
  getAllOrders() {
    const validOrders = data.orders.map((order) => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.price = order.price;
      newOrder.date = order.date.toLocaleString('en-GB', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      });
      newOrder.product = order.product;
      return newOrder;
    });
    return validOrders;
  },
  addOrder(order) {
    const newOrder = order;
    const orderLength = data.orders.length;
    const lastID = data.orders[orderLength - 1].id;
    newOrder.id = lastID + 1;
    data.orders.push(newOrder);
    return newOrder;
  },
};

export default OrderService;
