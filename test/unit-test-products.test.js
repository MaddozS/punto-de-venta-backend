const chai = require('chai');
const chaiHttp = require('chai-http');

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

  it('/products (PUT) Modificar un producto', function (done) {
    // Se crea el objeto a modificar en la base de datos
    const modifiedProduct = {
      name: 'Papas Chilosas',
      price: 5.5,
      description: 'Papas muy picosas bolsa 45g',
    };

    chai
      // Se manda un request al servidor para encontrar el producto
      .request(baseUrl)
      .get('/products')
      .then(function (res) {
        // Guardamos el ID del producto a modificar
        const id = res.body[0]._id;
        // Hacemos una segunda request para modificar el producto
        chai
          .request(baseUrl)
          .put(`/products/${id}`)
          .send(modifiedProduct)
          .end(function (err, res) {
          // Se verifica la respuesta
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.have.property('_id');
          chai.expect(res.body.name).to.equal(modifiedProduct.name);
          chai.expect(res.body.price).to.equal(modifiedProduct.price);
          chai.expect(res.body.description).to.equal(modifiedProduct.description);
          done();
        });
      });
  });
  
  it('/products (DELETE) Eliminar un producto', function (done) {
    chai
      // Se manda un request al servidor para encontrar el producto a eliminar
      .request(baseUrl)
      .get('/products')
      .then(function (res) {
        // Se guarda el ID del producto a eliminar
        const id = res.body[0]._id;
        // Se manda una segunda request para eliminar el producto
        chai
          .request(baseUrl)
          .delete(`/products/${id}`)
          .end(function (err, res) {
          // Se verifica la respuesta
          chai.expect(res).to.have.status(204);
          done();
        });
      });
  });

});
