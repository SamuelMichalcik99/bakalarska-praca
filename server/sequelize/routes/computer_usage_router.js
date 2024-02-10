const computer_usage_controller = require("../controllers/computer_usage_controller");

const router = require("express").Router();

router.get("/", computer_usage_controller.get_all_computer_usages);
router.get("/:id", computer_usage_controller.get_one_computer_usage);

module.exports = router;