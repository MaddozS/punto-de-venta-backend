const chai = require('chai');
const chaiHttp = require('chai-http');

// URL del servidor local del proyecto
const baseUrl = 'http://localhost:5000';

chai.use(chaiHttp);

describe('Pruebas unitarias del REST API', () => {
  it('/suppliers (GET) Obtener todos los proveedores', function (done) {
    chai
      // Se manda un request al servidor
      .request(baseUrl)
      .get('/suppliers')
      .end(function (err, res) {
        // Se verifica la respuesta
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.an('array');
        done();
      });
  });

  it('/suppliers (POST) Insertar un proveedor', function (done) {
    // Se crea el objeto a crear en la base de datos
    const supplier = {
      name: 'Proveedor nuevo (de prueba)',
    };

    chai
      .request(baseUrl)
      .post('/suppliers')
      .send(supplier)
      .end(function (err, res) {
        // Se verifica la respuesta
        chai.expect(res).to.have.status(201);
        chai.expect(res.body).to.have.property('_id');
        chai.expect(res.body).to.have.property('productsOffer');
        done();
      });
  });
});
