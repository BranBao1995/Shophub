const { OrderedProducts } = require("../models");

const orderedproductsdata = [
  {
    product_id: 1,
    user_id: 1,
  },
  {
    product_id: 4,
    user_id: 1,
  },
  {
    product_id: 2,
    user_id: 2,
  },
  {
    product_id: 5,
    user_id: 2,
  },
  {
    product_id: 6,
    user_id: 3,
  },
  {
    product_id: 1,
    user_id: 3,
  },
  {
    product_id: 3,
    user_id: 4,
  },
  {
    product_id: 8,
    user_id: 4,
  },
];

const seedOrderedProducts = () =>
  OrderedProducts.bulkCreate(orderedproductsdata);

module.exports = seedOrderedProducts;
