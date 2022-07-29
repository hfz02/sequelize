module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    });
    return Product;
  };