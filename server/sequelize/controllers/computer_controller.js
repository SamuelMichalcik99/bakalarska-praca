const db = require("../models");
const Sequelize = require("sequelize");

const computer = db.computer;
const computer_usage = db.computer_usage;
const motherboard = db.motherboard;
const processor = db.processor;
const cooler = db.cooler;
const operational_memory = db.operational_memory;
const solid_state_drive = db.solid_state_drive;
const hard_disk_drive = db.hard_disk_drive;
const graphic_card = db.graphic_card;
const power_supply = db.power_supply;
const pc_case = db.pc_case;

// Return all computers.
const get_all_computers = async (req, res) => {
  let all_computers = await computer.findAll({
    include: [computer_usage, motherboard, processor, cooler, operational_memory, solid_state_drive, hard_disk_drive, graphic_card, power_supply, pc_case],
    attributes: {
      exclude: ["computer_usage_id", "motherboard_id", "processor_id", "cooler_id", "operational_memory_id", "solid_state_drive_id", "hard_disk_drive_id", "graphic_card_id", "power_supply_id", "pc_case_id"],
      include: [
        [Sequelize.literal("COALESCE(`motherboard`.`price`, 0) + COALESCE(`processor`.`price`, 0) + COALESCE(`cooler`.`price`, 0) + COALESCE(`operational_memory`.`price`, 0) + COALESCE(`solid_state_drive`.`price`, 0) + COALESCE(`hard_disk_drive`.`price`, 0) + COALESCE(`graphic_card`.`price`, 0) + COALESCE(`power_supply`.`price`, 0) + COALESCE(`pc_case`.`price`, 0)"),
          "total_price",
        ],
      ],
    }
  })
  res.send(all_computers);
}

// Terun one computer by ID. 
const get_one_computer = async (req, res) => {
  let id = req.params.id;
  let one_computer = await computer.findOne({
    where: {
      computer_id: id
    },
    include: [computer_usage, motherboard, processor, cooler, operational_memory, solid_state_drive, hard_disk_drive, graphic_card, power_supply, pc_case],
    attributes: {
      exclude: ["computer_usage_id", "motherboard_id", "processor_id", "cooler_id", "operational_memory_id", "solid_state_drive_id", "hard_disk_drive_id", "graphic_card_id", "power_supply_id", "pc_case_id"],
      include: [
        [Sequelize.literal("COALESCE(`motherboard`.`price`, 0) + COALESCE(`processor`.`price`, 0) + COALESCE(`cooler`.`price`, 0) + COALESCE(`operational_memory`.`price`, 0) + COALESCE(`solid_state_drive`.`price`, 0) + COALESCE(`hard_disk_drive`.`price`, 0) + COALESCE(`graphic_card`.`price`, 0) + COALESCE(`power_supply`.`price`, 0) + COALESCE(`pc_case`.`price`, 0)"),
          "total_price",
        ],
      ],
    }
  })
  res.send(one_computer);
}

// Returns filtered computers based on requirements - conditions. Total price is not databse column, it is created and computed separately.
const get_filtered_computers = async (req, res) => {
  const conditions = {};

  /*usage*/
  if (req.body.usage.length !== 0) {
    conditions["$computer_usage.usage$"] = req.body.usage;
  }

  /* cpu */
  if (req.body.cpu_manufacturers.length !== 0) {
    conditions["$processor.manufacturer$"] = req.body.cpu_manufacturers;
  }

  /* cooler */
  if (req.body.cooler_types.length !== 0) {
    conditions["$cooler.type$"] = req.body.cooler_types;
  }

  /* ram */
  if (req.body.ram_types.length !== 0) {
    conditions["$operational_memory.type$"] = req.body.ram_types;
  }
  conditions["$operational_memory.memory$"] = { [Sequelize.Op.between]: req.body.ram_memory };

  /* ssd */
  conditions["$solid_state_drive.memory$"] = { [Sequelize.Op.between]: req.body.ssd_memory };

  /* hdd */
  conditions["$hard_disk_drive.memory$"] = { [Sequelize.Op.between]: req.body.hdd_memory };

  /* gpu */
  if (req.body.gpu_manufacturers.length !== 0) {
    conditions["$graphic_card.manufacturer$"] = req.body.gpu_manufacturers;
  }
  conditions["$graphic_card.memory$"] = { [Sequelize.Op.between]: req.body.gpu_memory };

  /* psu */
  if (req.body.psu_certification.length !== 0) {
    conditions["$power_supply.certification$"] = req.body.psu_certification;
  }
  conditions["$power_supply.wattage$"] = { [Sequelize.Op.between]: req.body.psu_wattage };

  /* case */
  if (req.body.case_size.length !== 0) {
    conditions["$pc_case.size$"] = req.body.case_size;
  }
  if (req.body.case_lighting.length !== 0) {
    conditions["$pc_case.fan_lighting$"] = req.body.case_lighting;
  }

  let all_computers = await computer.findAll({
    having: { 
      "$total_price$": { [Sequelize.Op.between]: req.body.price },
      "$total_cores$": { [Sequelize.Op.between]: req.body.cpu_cores}
    },
    where: conditions,
    include: [computer_usage, motherboard, processor, cooler, operational_memory, solid_state_drive, hard_disk_drive, graphic_card, power_supply, pc_case],
    attributes: {
      exclude: ["computer_usage_id", "motherboard_id", "processor_id", "cooler_id", "operational_memory_id", "solid_state_drive_id", "hard_disk_drive_id", "graphic_card_id", "power_supply_id", "pc_case_id"],
      include: [
        [Sequelize.literal("COALESCE(`motherboard`.`price`, 0) + COALESCE(`processor`.`price`, 0) + COALESCE(`cooler`.`price`, 0) + COALESCE(`operational_memory`.`price`, 0) + COALESCE(`solid_state_drive`.`price`, 0) + COALESCE(`hard_disk_drive`.`price`, 0) + COALESCE(`graphic_card`.`price`, 0) + COALESCE(`power_supply`.`price`, 0) + COALESCE(`pc_case`.`price`, 0)"),
          "total_price",
        ],
        [Sequelize.literal("COALESCE(`processor`.`p_cores`, 0) + COALESCE(`processor`.`e_cores`, 0)"),
          "total_cores",
        ],
      ],
    },
    order: [
      ['total_price', 'ASC']
    ]
  })
  res.send(all_computers);
}

module.exports = {
  get_all_computers,
  get_one_computer,
  get_filtered_computers
}