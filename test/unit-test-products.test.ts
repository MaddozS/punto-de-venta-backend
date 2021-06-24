const chai = require('chai');
const chaiHttp = require('chai-http');
const baseUrl = 'http://localhost:5000';

chai.use(chaiHttp);

describe('AppController (e2e)', () => {
  it('/products (GET) Obtener todos los productos', function (done) {
    chai
      .request(baseUrl)
      .get('/products')
      .end(function (err, res) {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.an('array');
        done();
      });
  });

  it('/products (POST) Insertar un producto', function (done) {
    const product = {
      name: 'Papas Chilosas',
      price: 10.5,
      description: 'Papas bien picosas bolsa 40g',
    };

    chai
      .request(baseUrl)
      .post('/products')
      .send(product)
      .end(function (err, res) {
        chai.expect(res).to.have.status(201);
        chai.expect(res.body).to.have.property('_id');
        chai.expect(res.body).to.have.property('createdAt');
        done();
      });
  });
});
