const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientFormSchema = new Schema({
  timeframe: { type: String, required: true },
  recipient: { type: String, required: true },
  pricerange: { type: String, required: true },
  genre: { type: String, required: true },
  size: { type: String, required: true },
  details: { type: String, required: true },
});

const ClientForm = mongoose.model("ClientForm", clientFormSchema);

module.exports = ClientForm;
