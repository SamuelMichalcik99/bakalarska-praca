const solid_state_drive_controller = require("../controllers/solid_state_drive_controller");

const router = require("express").Router();

router.get("/", solid_state_drive_controller.get_all_solid_state_drives);
router.get("/:id", solid_state_drive_controller.get_one_solid_state_drive);

module.exports = router;