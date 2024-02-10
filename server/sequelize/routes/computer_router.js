const computer_controller = require("../controllers/computer_controller");

const router = require("express").Router();

router.get("/computers", computer_controller.get_all_computers);
router.get("/computers/:id", computer_controller.get_one_computer);
router.post("/filtered-computers", computer_controller.get_filtered_computers);

module.exports = router;