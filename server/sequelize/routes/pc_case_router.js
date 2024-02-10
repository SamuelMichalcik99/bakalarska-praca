const pc_case_controller = require("../controllers/pc_case_controller");

const router = require("express").Router();

router.get("/", pc_case_controller.get_all_pc_cases);
router.get("/:id", pc_case_controller.get_one_pc_case);

module.exports = router;