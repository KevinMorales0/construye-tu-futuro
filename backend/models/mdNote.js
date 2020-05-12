const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
    id: Number,
    title: String,
    contain: String,
    inBox: Boolean
});



module.exports = model("note", noteSchema);