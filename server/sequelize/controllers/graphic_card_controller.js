const db = require("../models");

const graphic_card = db.graphic_card;

// Return all graphic cards.
const get_all_graphic_cards = async (req, res) => {
  let all_graphic_cards = await graphic_card.findAll({})
  res.send(all_graphic_cards);
}

// Return graphic card by ID.
const get_one_graphic_card = async (req, res) => {
  let id = req.params.id;
  let one_graphic_card = await graphic_card.findOne({
    where: {
      graphic_card_id: id
    }
  })
  res.send(one_graphic_card);
}

module.exports = {
  get_all_graphic_cards,
  get_one_graphic_card,
}