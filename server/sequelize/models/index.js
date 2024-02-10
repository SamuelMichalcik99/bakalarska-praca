/************************************************************
*                          MAIL                             *
*                                                           *
*    In index.js, the connection to the Mysql database is   *
*    set up using the Sequelize library, allowing           *
*    object-relational mapping. Each database table is      *
*    represented by a single model, which are synchronized  *
*    with each other. The library also allows you to        *
*    set up relationships between tables (defining foreign  *
*    keys). The output is an exported object that           *
*    represents the database and allows you to efficiently  *
*    search and work with the data in the database.         *
*                                                           *
************************************************************/

'use strict';

const database_config = require("../config/database.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize (
  database_config.DB,
  database_config.USERNAME,
  database_config.PASSWORD,
  {
    host: database_config.HOST,
    dialect: database_config.dialect,
    operatorsAliases: 0
  }
)

sequelize.authenticate()
.then(() => {
  console.log("Connected successfully!");
})
.catch((err) => {
  console.log("Error:" + err);
})


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models definition = each model represents one databse table.
db.computer_usage = require("./computer_usage")(sequelize, DataTypes);
db.computer = require("./computer")(sequelize, DataTypes);
db.cooler = require("./cooler")(sequelize, DataTypes);
db.graphic_card = require("./graphic_card")(sequelize, DataTypes);
db.hard_disk_drive = require("./hard_disk_drive")(sequelize, DataTypes);
db.motherboard = require("./motherboard")(sequelize, DataTypes);
db.operational_memory = require("./operational_memory")(sequelize, DataTypes);
db.pc_case = require("./pc_case")(sequelize, DataTypes);
db.power_supply = require("./power_supply")(sequelize, DataTypes);
db.processor = require("./processor")(sequelize, DataTypes);
db.solid_state_drive = require("./solid_state_drive")(sequelize, DataTypes);


// Tables and models synchronization.
db.sequelize.sync({ alter: true })
.then(() => {
  console.log("Synced successfully!");
})
.catch((err) => {
  console.log(err);
});


// Rlations definition using foreign keys.
db.computer_usage.hasMany(db.computer, {
  foreignKey: "computer_usage_id"
});
db.computer.belongsTo(db.computer_usage, {
  foreignKey: "computer_usage_id"
});


db.cooler.hasMany(db.computer, {
  foreignKey: "cooler_id"
});
db.computer.belongsTo(db.cooler, {
  foreignKey: "cooler_id"
});


db.graphic_card.hasMany(db.computer, {
  foreignKey: "graphic_card_id"
});
db.computer.belongsTo(db.graphic_card, {
  foreignKey: "graphic_card_id"
});


db.hard_disk_drive.hasMany(db.computer, {
  foreignKey: "hard_disk_drive_id"
});
db.computer.belongsTo(db.hard_disk_drive, {
  foreignKey: "hard_disk_drive_id"
});


db.motherboard.hasMany(db.computer, {
  foreignKey: "motherboard_id"
});
db.computer.belongsTo(db.motherboard, {
  foreignKey: "motherboard_id"
});


db.operational_memory.hasMany(db.computer, {
  foreignKey: "operational_memory_id"
});
db.computer.belongsTo(db.operational_memory, {
  foreignKey: "operational_memory_id"
});


db.pc_case.hasMany(db.computer, {
  foreignKey: "pc_case_id"
});
db.computer.belongsTo(db.pc_case, {
  foreignKey: "pc_case_id"
});


db.power_supply.hasMany(db.computer, {
  foreignKey: "power_supply_id"
});
db.computer.belongsTo(db.power_supply, {
  foreignKey: "power_supply_id"
});


db.processor.hasMany(db.computer, {
  foreignKey: "processor_id"
});
db.computer.belongsTo(db.processor, {
  foreignKey: "processor_id"
});


db.solid_state_drive.hasMany(db.computer, {
  foreignKey: "solid_state_drive_id"
});
db.computer.belongsTo(db.solid_state_drive, {
  foreignKey: "solid_state_drive_id"
});

module.exports = db;
