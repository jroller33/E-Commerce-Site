const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {       // DONE
  // find all tags, incl associated Product data
    try {
        const tagData = await Tag.findAll({
            include: [{ model: Product }]
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {    // DONE
  // find a single tag by its `id`, incl associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }],
    });
    if (!tagData) {
        res.status(404).json({ message: 'no tag with that id' });
        return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {      // DONE
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {     // DONE
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
        { tag_name: req.body.tag_name }
        ,{where: { id: req.params.id }}
    );

    if (!tagData) {
        res.status(404).json({ message: 'no tag found with that id' });
        return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {     // DONE
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
        where: {
            id: req.params.id,
        },
    });
    
    if (!tagData) {
        res.status(404).json({ message: 'no tag found with that id' });
        return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

