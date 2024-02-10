const db = require("../models");

const power_supply = db.power_supply;

//Return all power supplies.
const get_all_power_supplies = async (req, res) => {
  let all_power_supplies = await power_supply.findAll({})
  res.send(all_power_supplies);
}

// Return power supply by ID.
const get_one_power_supply = async (req, res) => {
  let id = req.params.id;
  let one_power_supply = await power_supply.findOne({
    where: {
      power_supply_id: id
    }
  })
  res.send(one_power_supply);
}

module.exports = {
  get_all_power_supplies,
  get_one_power_supply,
}