const mongoose = require("mongoose");

//planets schema
const planetsSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    }
})