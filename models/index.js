const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: ''
});

Category.hasMany(Product, {
  // ???  
});

Product.belongsToMany(Tag, {
  // through ProductTag
});

Tag.belongsToMany(Product, {
  // through ProductTag
});


// to do:
// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
