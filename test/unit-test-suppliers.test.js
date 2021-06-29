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
      name: "Proveedor (de prueba)",
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

  it('/suppliers (PATCH) Modificar un proveedor', function (done) {
    // Se crea el objeto a modificar en la base de datos
    const modifiedSupplier = {
      name: 'Proveedor modificado (de prueba)',
    };

    chai
      // Se manda un request al servidor para encontrar el proveedor
      .request(baseUrl)
      .get('/suppliers')
      .then(function (res) {
        // Guardamos el ID del proveedor a modificar
        const id = res.body[0]._id;
        // Hacemos una segunda request para modificar el proveedor
        chai
          .request(baseUrl)
          .patch(`/suppliers/${id}`)
          .send(modifiedSupplier)
          .end(function (err, res) {
          // Se verifica la respuesta
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.have.property('_id');
          chai.expect(res.body.name).to.equal(modifiedSupplier.name);
          done();
        });
      });
  });

  it('/suppliers (DELETE) Eliminar un proveedor', function (done) {
    chai
      // Se manda un request al servidor para encontrar el proveedor a eliminar
      .request(baseUrl)
      .get('/suppliers')
      .then(function (res) {
        // Se guarda el ID del proveedor a eliminar
        const id = res.body[0]._id;
        // Se manda una segunda request para eliminar el proveedor
        chai
          .request(baseUrl)
          .delete(`/suppliers/${id}`)
          .end(function (err, res) {
          // Se verifica la respuesta
          chai.expect(res).to.have.status(200);
          done();
        });
      });
  });
});
