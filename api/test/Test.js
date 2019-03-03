import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);

describe('Testing meal routes', () => {
  it('it should GET all the meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        const body = { ...res.body };
        const count = Number(body.count);
        const meals = [...body.meals];
        res.should.have.status(200);
        res.body.should.be.a('object');
        count.should.be.a('number');
        meals.should.be.a('array');
        done();
      });
  });

  it('it should post a meal', (done) => {
    const meal = {
      id: 12,
      name: 'porridge beans',
      price: 150,
      category: 'lunch',
      options: [
        {
          id: 1,
          name: 'chicken',
          price: 150,
        },
        {
          id: 2,
          name: 'egg',
          price: 60,
        },
        {
          id: 3,
          name: 'beef',
          price: 100,
        },
        {
          id: 4,
          name: 'fish',
          price: 200,
        },
      ],
    };
    chai.request(app)
      .post('/api/v1/meals')
      .send(meal)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should GET a meal by a given id', (done) => {
    const id = 2;
    chai.request(app)
      .get(`/api/v1/meals/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.Meal.should.have.property('id');
        res.body.Meal.should.have.property('id').eql(id);
        res.body.Meal.should.have.property('name');
        res.body.Meal.should.have.property('price');
        res.body.Meal.should.have.property('category');
        done();
      });
  });

  it('it should DELETE a meal by a given id', (done) => {
    const id = 2;
    chai.request(app)
      .delete(`/api/v1/meals/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').eql('Meal deleted');
        done();
      });
  });

  it('it should PATCH (modify) a meal by a given id', (done) => {
    const id = 2;
    const updates = [
      {
        name: 'fried rice',
        category: 'all',
        price: 250,
      },
    ];
    chai.request(app)
      .patch(`/api/v1/meals/${id}`)
      .send(updates)
      .end((err, res) => {
        res.should.have.status(200);
        const resp = { ...res.body.modMeal };
        resp.should.have.property('id');
        resp.should.have.property('name');
        resp.should.have.property('id').eql(id);
        done();
      });
  });
});

describe('Testing order routes', () => {
  it('it should GET all the orders', (done) => {
    chai.request(app)
      .get('/api/v1/orders2')
      .end((err, res) => {
        const body = { ...res.body };
        const count = Number(body.count);
        const orders = [...body.Orders];
        res.should.have.status(200);
        res.body.should.be.a('object');
        count.should.be.a('number');
        orders.should.be.a('array');
        done();
      });
  });

  it('it should POST an order', (done) => {
    const theOrder = {
      price: 3000,
      date: '2019-02-01T12:33:43.350Z',
      description: [
        {
          mealName: 'porridge yam',
          mealPrice: 200,
          plates: 3,
          toppings: [
            {
              toppingName: 'beef',
              toppingPrice: 100,
              quantity: 4,
            },
            {
              toppingName: 'pomo',
              toppingPrice: 100,
              quantity: 4,
            },
          ],
        },
      ],
    };
    chai.request(app)
      .post('/api/v1/orders2')
      .send(theOrder)
      .end((err, res) => {
        const body = { ...res.body.createdOrder };
        const price = Number(body.price);
        const desc = body.description;
        res.should.have.status(201);
        res.body.should.be.a('object');
        price.should.be.a('number');
        desc.should.be.a('array');
        done();
      });
  });

  it('it should GET an order by a given id', (done) => {
    const id = 2;
    chai.request(app)
      .get(`/api/v1/orders2/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        const body = { ...res.body.theOrder };
        body.should.have.property('id');
        body.should.have.property('id').eql(id);
        body.should.have.property('price');
        body.should.have.property('date'); body.should.have.property('description');
        body.description.should.be.a('array');
        done();
      });
  });

  it('it should PATCH (modify) an order by a given id', (done) => {
    const id = 2;
    const updates = [
      {
        price: 1800,
        description: [
          {
            mealName: 'white rice',
            mealPrice: 200,
            plates: 3,
            toppings: [
              {
                toppingName: 'beef',
                toppingPrice: 100,
                quantity: 2,
              },
              {
                toppingName: 'pomo',
                toppingPrice: 100,
                quantity: 2,
              },
            ],
          },
        ],
      },
    ];
    chai.request(app)
      .patch(`/api/v1/orders2/${id}`)
      .send(updates)
      .end((err, res) => {
        res.should.have.status(200);
        const resp = { ...res.body.modifiedOrder };
        resp.should.have.property('oldOrder');
        resp.should.have.property('newOrder');
        done();
      });
  });
});

describe('Testing menu routes', () => {
  it('it should GET all the menu', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
