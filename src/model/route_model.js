const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  guid: { type: String, required: true },
  name: { type: String, required: true },
  witel: { type: String, required: true },
  coordinates: [{ type: Object, required: true }],
  createdAt: { type: Date, default: Date.now },
  regional: { type: String, required: true }
}, { versionKey: false });

const DataModel = mongoose.model('route', DataSchema);

module.exports = DataModel;
