const mongoose = require("mongoose");
const poetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      unique: true,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Poet = mongoose.model("Poet", poetSchema);
module.exports = Poet;