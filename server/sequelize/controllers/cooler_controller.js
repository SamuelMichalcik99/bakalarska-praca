const db = require("../models");

const cooler = db.cooler;

//Return all coolers.
const get_all_coolers = async (req, res) => {
  let all_coolers = await cooler.findAll({})
  res.send(all_coolers);
}

// Return cooler by ID.
const get_one_cooler = async (req, res) => {
  let id = req.params.id;
  let one_cooler = await cooler.findOne({
    where: {
      cooler_id: id
    }
  })
  res.send(one_cooler);
}

module.exports = {
  get_all_coolers,
  get_one_cooler,
}