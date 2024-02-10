const operational_memory_controller = require("../controllers/operational_memory_controller");

const router = require("express").Router();

router.get("/", operational_memory_controller.get_all_operational_memories);
router.get("/:id", operational_memory_controller.get_one_operational_memory);

module.exports = router;