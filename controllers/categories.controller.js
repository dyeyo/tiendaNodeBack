const Sequelize = require('sequelize');
// import * as Sequelize from 'sequelize'
const Categorie = require('../models/categorie');

exports.findAll = async (req, res) => {
  const categories = await Categorie.findAll();
  res.status(200).json({
    status: true,
    data: categories
  });
}

exports.create = (req, res) => {
  Categorie.create(req.body).then((book) => {
    res.status(200).json({
      status: true,
      message: "Categorie created",
    });
  });
};


exports.findByPk = (req, res) => {
  Categorie.findByPk(req.params.bookId).then((book) => {
    res.status(200).json({
      status: true,
      data: book,
    });
  });
};

exports.update = (req, res) => {
  const id = req.params.bookId;
  Categorie.update(req.body,
    { where: { id: req.params.bookId } }
  ).then(() => {
    res.status(200).json({
      status: true,
      message: "Categorie updated successfully with id = " + id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.bookId;
  Categorie.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).json({
      status: true,
      message: "Categorie deleted successfully with id = " + id
    });
  });
};
