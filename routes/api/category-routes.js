const router = require('express').Router();
const { Category, Product } = require('../../models');

// The '/api/categories' endpoint

router.get('/', (req, res) => {
  // find all categories and include its Products
});

router.get('/:id', (req, res) => {
  // find one category by its 'id' value and include its products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its 'id' value
});

router.delete('/:id', (req, res) => {
  // delete a category by its 'id' value
});

module.exports = router;
