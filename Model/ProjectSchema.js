const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    img: String,
    tags: Array,
    title: String,
    demo: String,
    desc: String,
    github: String

}, { timestamps: true })


module.exports = mongoose.model('Projects', ProjectSchema)