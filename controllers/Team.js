const Team = require("../models/Teams");

const addTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    if (!team) return res.status(400).json("Could Not add ");
    await team.save();
    return res.status(200).json(team);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({});
    if (teams) {
      return res.status(200).json(teams);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { addTeam, getTeams };
