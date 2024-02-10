const motherboard_controller = require("../controllers/motherboard_controller");

const router = require("express").Router();

router.get("/", motherboard_controller.get_all_motherboards);
router.get("/:id", motherboard_controller.get_one_motherboard);

module.exports = router;