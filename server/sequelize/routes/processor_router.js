const processor_controller = require("../controllers/processor_controller");

const router = require("express").Router();

router.get("/", processor_controller.get_all_processors);
router.get("/:id", processor_controller.get_one_processor);

module.exports = router;