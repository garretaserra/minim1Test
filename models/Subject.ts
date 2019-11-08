'use strict';
import mongoose = require("mongoose");

let subject =mongoose.Schema({
    name: {type: String, required: true, unique: true},
    students: [{type: mongoose.Types.ObjectId, ref: 'Student'}]
});

module.exports = mongoose.model('Subject', subject);
