const Roles = require('../models/roles');

const getRoles = async (req, res = response) => {
  const roles = await Roles.findAll();
  res.status(200).json({
    status: true,
    data: roles
  });
}




const create = (req, res) => {
  // Roles.create(req.body).then((role) => {
  //   res.status(200).json({
  //     status: true,
  //     message: "Role created",
  //   });
  // });
};


const findByPk = (req, res) => {
  // Roles.findByPk(req.params.bookId).then((book) => {
  //   res.status(200).json({
  //     status: true,
  //     data: book,
  //   });
  // });
};

const update = (req, res) => {
  // const id = req.params.bookId;
  // Roles.update(req.body,
  //   { where: { id: req.params.bookId } }
  // ).then(() => {
  //   res.status(200).json({
  //     status: true,
  //     message: "Categorie updated successfully with id = " + id
  //   });
  // });
};

const destroy = (req, res) => {
  // const id = req.params.bookId;
  // Roles.destroy({
  //   where: { id: id },
  // }).then(() => {
  //   res.status(200).json({
  //     status: true,
  //     message: "Categorie deleted successfully with id = " + id
  //   });
  // });
};

module.exports = { getRoles }