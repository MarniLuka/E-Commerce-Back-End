const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//localhost:3001/api/tags

// Finds all tags, includes its associated product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status (500).json(err);
  }
});

// Fins a single tag by its 'id'. Includes its associated product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if(!tagData) {
      res.status(404).json({ message: 'There is no tag with that id. Please try again.' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates a tag's name by its 'id' value
router.put('/:id', (req, res) => {
  try {
    const updateTag = Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if(!updateTag[0]) {
      res.status(404).json({ message: 'No tag with that id. Please try again.'});
      return;
    }
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a tag by its 'id' value
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteTag) {
      res.status(404).json({ message: 'No tag with that id. Please try again.'});
      return;
    }
    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
