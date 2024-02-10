const db = require("../models");

const pc_case = db.pc_case;

//Return all computer cases.
const get_all_pc_cases = async (req, res) => {
  let all_pc_cases = await pc_case.findAll({})
  res.send(all_pc_cases);
}

// Return computer case by ID.
const get_one_pc_case = async (req, res) => {
  let id = req.params.id;
  let one_pc_case = await pc_case.findOne({
    where: {
      pc_case_id: id
    }
  })
  res.send(one_pc_case);
}

module.exports = {
  get_all_pc_cases,
  get_one_pc_case,
}