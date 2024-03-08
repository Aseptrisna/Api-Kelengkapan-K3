const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    guid: { type: String },
    value: { type: String },
    date: { type: String },
}, { versionKey: false });

const DataModel = mongoose.model('distance', DataSchema);

module.exports = DataModel;
