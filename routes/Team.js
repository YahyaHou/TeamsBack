const express = require("express");
const router = express.Router();
const { addTeam, getTeams } = require("../controllers/Team");

router.get("/", getTeams);
router.post("/", addTeam);

module.exports = router;
