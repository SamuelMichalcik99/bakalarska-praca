const hard_disk_drive_controller = require("../controllers/hard_disk_drive_controller");

const router = require("express").Router();

router.get("/", hard_disk_drive_controller.get_all_hard_disk_drives);
router.get("/:id", hard_disk_drive_controller.get_one_hard_disk_drive);

module.exports = router;