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
});
