const db = require("../models");

const hard_disk_drive = db.hard_disk_drive;

// Return all hard disk drives.
const get_all_hard_disk_drives = async (req, res) => {
  let all_hard_disk_drives = await hard_disk_drive.findAll({})
  res.send(all_hard_disk_drives);
}

// Return hard disk drivy by ID.
const get_one_hard_disk_drive = async (req, res) => {
  let id = req.params.id;
  let one_hard_disk_drive = await hard_disk_drive.findOne({
    where: {
      hard_disk_drive_id: id
    }
  })
  res.send(one_hard_disk_drive);
}

module.exports = {
  get_all_hard_disk_drives,
  get_one_hard_disk_drive,
}