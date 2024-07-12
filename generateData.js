const faker = require('faker');
const totalRecords = 20;

const generateProducts = (num = totalRecords) => {
  const products = [];
  for (let i = 0; i < num; i++) {
    products.push({
      id: i + 1,
      nome: faker.commerce.productName(),
      descricao: faker.commerce.productDescription()
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
