const express = require('express');
const router = require("express").Router();
const Roles = require("../controllers/roles.controller");

// Create a new roles
router.post("", Roles.create);

// Retrieve all roles
router.get("", Roles.findAll);

// Retrieve a single roles by Id
router.get("/:rolesId", Roles.findByPk);

// Update a roles with Id
router.put("/:rolesId", Roles.update);

// Delete a roles with Id
router.delete("/:rolesId", Roles.delete);

module.exports = router;
