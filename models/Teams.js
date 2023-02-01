const { Schema, model } = require("mongoose");

const TeamSchema = new Schema(
  {
    team: {
      type: String,
    },
    standing: {
      type: Number,
    },
    points: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    collection: "teams",
    versionKey: false,
    timeseries: true,
  }
);
const Team = model("Team", TeamSchema);
module.exports = Team;
