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
        console.log(res.body);
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
