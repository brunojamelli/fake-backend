const express = require('express');
const jsonServer = require('json-server');

// const swaggerUi = require('swagger-ui-express');
// const oas = require('express-oas-generator');

const app = express();
oas.init(app, {});  // Inicializa o express-oas-generator

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);

app.use('/api', router);

// configuração swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
//   swaggerOptions: {
//     url: '/home/brunojamelli/Projects/fake-backend/openapi.json' // caminho para o arquivo swagger gerado
//   }
// }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
