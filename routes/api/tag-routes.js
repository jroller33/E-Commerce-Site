const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The '/api/tags' endpoint

router.get('/', (req, res) => {
  // find all tags
  // include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its 'id' include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      ...req.body,
    });
    
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its 'id' value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its 'id' value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
