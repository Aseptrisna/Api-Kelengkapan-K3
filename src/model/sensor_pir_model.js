const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    guid: { type: String },
    value: { type: String },
    image: { type: String },
    date: { type: String },
}, { versionKey: false });

const DataModel = mongoose.model('result_pir', DataSchema);

module.exports = DataModel;
