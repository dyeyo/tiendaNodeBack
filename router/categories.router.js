const express = require('express');
const router = require("express").Router();
const categories = require("../controllers/categories.controller");

// Create a new categories
router.post("", categories.create);

// Retrieve all categories
router.get("", categories.findAll);

// Retrieve a single categories by Id
router.get("/:categoriesId", categories.findByPk);

// Update a categories with Id
router.put("/:categoriesId", categories.update);

// Delete a categories with Id
router.delete("/:categoriesId", categories.delete);

module.exports = router;
