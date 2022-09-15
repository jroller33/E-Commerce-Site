const router = require('express').Router();
const { Category, Product } = require('../../models');

// The '/api/categories' endpoint

router.get('/', (req, res) => {
  // find all categories and include its Products
});

router.get('/:id', (req, res) => {
  // find one category by its 'id' value and include its products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      ...req.body,
    });

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its 'id' value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its 'id' value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
