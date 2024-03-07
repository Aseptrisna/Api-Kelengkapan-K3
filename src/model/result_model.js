const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    guid: { type: String },
    name: { type: String },
    id: { type: String },
    position: { type: String },
    image: { type: String }, 
    access: { type: Boolean }, 
    status: { type: String },
    date: { type: String },
}, { versionKey: false });

const DataModel = mongoose.model('result', DataSchema);

module.exports = DataModel;
