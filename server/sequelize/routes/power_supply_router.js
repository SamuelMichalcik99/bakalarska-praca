const power_supply_controller = require("../controllers/power_supply_controller");

const router = require("express").Router();

router.get("/", power_supply_controller.get_all_power_supplies);
router.get("/:id", power_supply_controller.get_one_power_supply);

module.exports = router;