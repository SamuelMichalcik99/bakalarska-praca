const graphic_card_controller = require("../controllers/graphic_card_controller");

const router = require("express").Router();

router.get("/", graphic_card_controller.get_all_graphic_cards);
router.get("/:id", graphic_card_controller.get_one_graphic_card);

module.exports = router;