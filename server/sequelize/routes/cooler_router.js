const cooler_controller = require("../controllers/cooler_controller");

const router = require("express").Router();

router.get("/", cooler_controller.get_all_coolers);
router.get("/:id", cooler_controller.get_one_cooler);

module.exports = router;