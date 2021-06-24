import * as chai from 'chai';
import chaiHttp = require('chai-http');

// URL del servidor local del proyecto
const baseUrl = 'http://localhost:5000';

chai.use(chaiHttp);

describe('Pruebas unitarias del REST API', () => {
  it('/products (GET) Obtener todos los productos', function (done) {
    chai
      // Se manda un request al servidor
      .request(baseUrl)
      .get('/products')
      .end(function (err, res) {
        // Se verifica la respuesta
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.an('array');
        done();
      });
  });

  it('/products (POST) Insertar un producto', function (done) {
    // Se crea el objeto a crear en la base de datos
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
        // Se verifica la respuesta
        chai.expect(res).to.have.status(201);
        chai.expect(res.body).to.have.property('_id');
        chai.expect(res.body).to.have.property('createdAt');
        done();
      });
  });
});
