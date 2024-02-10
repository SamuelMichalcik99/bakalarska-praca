const db = require("../models");

const solid_state_drive = db.solid_state_drive;

// Return all solid state drives.
const get_all_solid_state_drives = async (req, res) => {
  let all_solid_state_drives = await solid_state_drive.findAll({})
  res.send(all_solid_state_drives);
}

// Return solid state drive by ID.
const get_one_solid_state_drive = async (req, res) => {
  let id = req.params.id;
  let one_solid_state_drive = await solid_state_drive.findOne({
    where: {
      solid_state_drive_id: id
    }
  })
  res.send(one_solid_state_drive);
}

module.exports = {
  get_all_solid_state_drives,
  get_one_solid_state_drive,
}