const db = require("../models");

const operational_memory = db.operational_memory;

// Return all operational memories.
const get_all_operational_memories = async (req, res) => {
  let all_operational_memories = await operational_memory.findAll({})
  res.send(all_operational_memories);
}

// Return operation memory by ID.
const get_one_operational_memory = async (req, res) => {
  let id = req.params.id;
  let one_operational_memory = await operational_memory.findOne({
    where: {
      operational_memory_id: id
    }
  })
  res.send(one_operational_memory);
}

module.exports = {
  get_all_operational_memories,
  get_one_operational_memory,
}