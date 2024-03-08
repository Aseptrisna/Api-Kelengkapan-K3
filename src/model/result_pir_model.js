const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    guid: { type: String },
    name: { type: String },
    image: { type: String },
    date: { type: String },
}, { versionKey: false });

const DataModel = mongoose.model('result_pir_image', DataSchema);

module.exports = DataModel;
