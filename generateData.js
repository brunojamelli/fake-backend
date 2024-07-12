// const faker = require('faker/locale/pt_BR');

const faker = require('faker');
const totalRecords = 20;

const generateProducts = (num = totalRecords) => {
  const products = [];
  for (let i = 0; i < num; i++) {
    products.push({
      id: i + 1,
      nome: faker.commerce.productName(),
      descricao: faker.commerce.productDescription(),
      preco: faker.commerce.price(5,2000)
    });
  }
  return products;
};

const generateData = () => {
  return {
    produtos: generateProducts()
  };
};


const fs = require('fs');
fs.writeFileSync('db.json', JSON.stringify(generateData(), null, 2));
