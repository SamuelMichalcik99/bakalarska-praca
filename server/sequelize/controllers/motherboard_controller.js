const db = require("../models");

const motherboard = db.motherboard;

//Return all motherboards.
const get_all_motherboards = async (req, res) => {
  let all_motherboards = await motherboard.findAll({})
  res.send(all_motherboards);
}

// Return motherboard by ID.
const get_one_motherboard = async (req, res) => {
  let id = req.params.id;
  let one_motherboard = await motherboard.findOne({
    where: {
      motherboard_id: id
    }
  })
  res.send(one_motherboard);
}

module.exports = {
  get_all_motherboards,
  get_one_motherboard,
}