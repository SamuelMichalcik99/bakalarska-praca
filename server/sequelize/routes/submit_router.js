const submit_controller = require("../controllers/submit_controller");

const router = require("express").Router();

router.post("/", submit_controller.submitForm);

module.exports = router;