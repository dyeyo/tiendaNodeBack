const express = require('express');
// const ProductsRouter = require('./products.router');
const CategoriesRouter = require('./categories.router');
const RolesRouter = require('./roles.router');

const router = express.Router();

router.use('/categories', CategoriesRouter);
router.use('/roles', RolesRouter);

module.exports = router;
