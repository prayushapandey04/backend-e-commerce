const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll().then((categoryData) => {
    res.status(200).json(categoryData);
  })
    .catch((err) => {
      res.status(500).json(err);
    });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {include: Product}).then((categoryData) => {
    if (!categoryData) {
      res.status(404).json({message: 'No Category found with that id!'});
      return;
    }
    res.json(categoryData);
  })
  .catch((err) => {
    res.status(500).json(err);
  });

});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
