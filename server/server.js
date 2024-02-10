/************************************************************
*                       SERVER SIDE                         *
*                                                           *
*    The server side is programmed in node.js using the     *
*    express.js framework. Using the App instance and the   *
*    "use" method, routers are used to allow the client     *
*    side to access data and interact with the server side  *
*    using HTTP requests. Only GET and in some cases POST   *
*    methods are made available, which use API endpoints    *
*    to retrieve the data. Routers, controllers and models  *
*    are located in the sequelize folder.                   *
*                                                           *
*    Each router is assigned its own controller, in which   *
*    the backend functionality is defined. The controllers  *
*    that are used to retrieve data from the database are   *
*    linked to the files in the Models folder. The models   *
*    folder files represent individual tables from the      *
*    database, using the Sequelize library. The config      *
*    folder contains the configuration of the connection    *
*    to the mysql database.                                 *
*                                                           *
************************************************************/

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routers
const computer_router = require("./sequelize/routes/computer_router");
const computer_usage_router = require("./sequelize/routes/computer_usage_router");
const cooler_router = require("./sequelize/routes/cooler_router");
const graphic_card_router = require("./sequelize/routes/graphic_card_router");
const hard_disk_drive_router = require("./sequelize/routes/hard_disk_drive_router");
const motherboard_router = require("./sequelize/routes/motherboard_router");
const operational_memory_router = require("./sequelize/routes/operational_memory_router");
const pc_case_router = require("./sequelize/routes/pc_case_router");
const power_supply_router = require("./sequelize/routes/power_supply_router");
const processor_router = require("./sequelize/routes/processor_router");
const solid_state_drive_router = require("./sequelize/routes/solid_state_drive_router");
const submit_router = require("./sequelize/routes/submit_router");


app.use("/api", computer_router);
app.use("/api/computer-usages", computer_usage_router);
app.use("/api/coolers", cooler_router);
app.use("/api/graphic-cards", graphic_card_router);
app.use("/api/hard-disk-drives", hard_disk_drive_router);
app.use("/api/motherboards", motherboard_router);
app.use("/api/operational-memories", operational_memory_router);
app.use("/api/pc-cases", pc_case_router);
app.use("/api/power-supplies", power_supply_router);
app.use("/api/processors", processor_router);
app.use("/api/solid-state-drives", solid_state_drive_router);
app.use("/api/submits", submit_router);


// Server listens at port 3001.
app.listen(3001, () => {
  console.log("Server works at localhost:3001");
});
