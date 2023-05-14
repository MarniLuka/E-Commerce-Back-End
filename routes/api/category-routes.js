const router = require('express').Router();
const { Category, Product } = require('../../models');

// localhost:3001/api/categories

// Find all categories
// Includes its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status (500).json(err);
  }
});

// Finds one category by its `id` value
// Also includes its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if(!categoryData) {
      res.status(404).json({ message: 'There is no category with that id. Please try again.' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // Creates a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      id: req.body.id,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

  //Uupdates a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if(!updateCategory[0]) {
      res.status(404).json({ message: 'No category with that id. Please try again.'});
      return;
    }
    res.status(200).json(updateCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // Deletes a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCategory) {
      res.status(404).json({ message: 'No category with that id. Please try again.'});
      return;
    }
    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  }
 });

module.exports = router;
