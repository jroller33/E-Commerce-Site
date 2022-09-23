const router = require('express').Router();
const { Category, Product } = require('../../models');

// The '/api/categories' endpoint

router.get('/', async (req, res) => {             //  DONE
  // find all categories and include its categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {          // DONE
  // find one category by its 'id' value and include its categories
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {          // DONE
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {        // DONE
  // update a category by its 'id' value
  try {
    const categoryData = await Category.update(
      { category_name: req.body.category_name }
      ,{where: { id: req.params.id }}
    );

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categories) => {
      console.log(categories);
      res.json(categories);
    })
    .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
    });

module.exports = router;
