import data from '../utils/orders2';
import Order2 from '../models/order2.model';


// Original source = https://dzone.com/articles/working-with-dates-in-javascript-json-and-oracle-d

const dateTimeRegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
const reviver = (value) => {
  if (dateTimeRegExp.test(value)) {
    return new Date(value).toLocaleString('en-GB', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
    });
  }
  return value;
};

const OrderService2 = {
  getAllOrders() {
    const validOrders = data.map((order) => {
      const newOrder = new Order2();
      newOrder.id = order.id;
      newOrder.date = reviver(order.date);
      newOrder.price = order.price;
      newOrder.description = [...order.description];
      return newOrder;
    });
    return validOrders;
  },
  addOrder(order) {
    // format
    // {
    //     "id": 1,
    //     "price": 3000,
    //     "date": "2019-02-22T13:33:43.708Z",
    //     "description": [
    //         {
    //             "mealName": "white rice",
    //             "mealPrice": 200,
    //             "plates": 3,
    //             "toppings": [
    //                 {
    //                     "toppingName": "beef",
    //                     "toppingPrice": 100,
    //                     "quantity": 4
    //                 },
    //                 {
    //                     "toppingName": "pomo",
    //                     "toppingPrice": 100,
    //                     "quantity": 4
    //                 }
    //             ]
    //         }
    //     ]
    // }
    const newOrder = order;
    const ordersLength = data.length;
    const lastID = data[ordersLength - 1].id;
    newOrder.id = lastID + 1;
    data.push(newOrder);
    return newOrder;
  },

  modifyOrder(orderID, updates) {
  // format
  /* [
    {
      "price": 1800,
      "description": [
                  {
                      "mealName": "white rice",
                      "mealPrice": 200,
                      "plates": 3,
                      "toppings": [
                          {
                              "toppingName": "beef",
                              "toppingPrice": 100,
                              "quantity": 2
                          },
                          {
                              "toppingName": "pomo",
                              "toppingPrice": 100,
                              "quantity": 2
                          }
                      ]
                  }
              ]
    }
  ]
   */
    const id = orderID;
    const orders = [...data];
    const indexOfOrderToModify = orders.findIndex(order => Number(order.id) === Number(id));
    const newOrder = orders[indexOfOrderToModify];
    // console.log(indexOfOrderToModify);
    // console.log(id);
    // console.log(orders);
    const oldOrder = { ...newOrder };
    updates.forEach((update) => {
      Object.keys(update).forEach((key) => {
        newOrder[key] = update[key];
      });
    });
    return { oldOrder, newOrder };
  },
  getOrder(orderID) {
    const id = orderID;
    const orders = [...data];
    const indexOfOrderToFind = orders.findIndex(order => Number(order.id) === Number(id));
    const order = orders[indexOfOrderToFind];
    const newOrder = new Order2();
    newOrder.id = order.id;
    newOrder.date = reviver(order.date);
    newOrder.price = order.price;
    newOrder.description = [...order.description];
    return newOrder;
  },
};
export default OrderService2;
