const mongoose = require("mongoose");

//planets schema
const planetsSchema = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

//connects planetsSchema with the "planets" collection
module.exports = mongoose.model("Planet", planetsSchema);
