const db = require("../models");

const processor = db.processor;

//Return all processors.
const get_all_processors = async (req, res) => {
  let all_processors = await processor.findAll({})
  res.send(all_processors);
}

// Return processor by ID.
const get_one_processor = async (req, res) => {
  let id = req.params.id;
  let one_processor = await processor.findOne({
    where: {
      processor_id: id
    }
  })
  res.send(one_processor);
}

module.exports = {
  get_all_processors,
  get_one_processor,
}