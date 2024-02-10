const db = require("../models");

const computer_usage = db.computer_usage;

// Return all computer_usages.
const get_all_computer_usages = async (req, res) => {
  let all_computer_usages = await computer_usage.findAll({})
  res.send(all_computer_usages);
}

// Return computer_usgae by ID.
const get_one_computer_usage = async (req, res) => {
  let id = req.params.id;
  let one_computer_usage = await computer_usage.findOne({
    where: {
      computer_usage_id: id
    }
  })
  res.send(one_computer_usage);
}

module.exports = {
  get_all_computer_usages,
  get_one_computer_usage,
}