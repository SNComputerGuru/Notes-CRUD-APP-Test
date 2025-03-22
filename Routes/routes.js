const express = require("express")
const controller = require("../Controllers/controllers")
const router = express.Router()

router.get("/", controller.getAllNotes)

module.exports = router